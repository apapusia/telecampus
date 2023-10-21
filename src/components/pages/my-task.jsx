import { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';



function MyTasks() {
  const [profileData, setProfileData] = useState(null);
  const [newTask, setNewTask] = useState("");


  const fetchData = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:5000/todo');
          const res = response.data;
          setProfileData(res);
        } catch (error) {
          console.error(error);
        }
      };
    
    useEffect(() => {
        fetchData();
    }, []);

  const handleAddTask = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/add', {
        todoitem: newTask,
      });
      
      fetchData();
      setNewTask('');
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleCompleteTask = async (id) => {
    try {
      const response = await axios.put(`http://127.0.0.1:5000/complete/${id}`);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleDeleteCompletedTasks = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/delete/${id}`);
      
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home-container">
        <div className="tasks-header">
            <p>
				<u>My Todo-s</u>
			</p>
            <div>
				<div>Add a new todo item:
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Nueva tarea"
                    />
                <button onClick={handleAddTask}>Agregar tarea</button>
			    </div>
			</div>
        </div>
        <div>
        {/* Muestra los datos del objeto */}
        
        {profileData && (
  <div>
    <h2>Incomplete Tasks:</h2>
    <ul>
        {profileData.incomplete.map((task) => (
              <li key={task.id}>
                <p>{task.text}</p>
                <DoneIcon onClick={() => handleCompleteTask(task.id)}/>
              </li>
        ))}
    </ul>

    <h2>Complete Tasks:</h2>
    <ul>
         {profileData.complete.map((task) => (
              <li key={task.id}>
                <p>{task.text}</p>
                <DeleteIcon onClick={() => handleDeleteCompletedTasks(task.id)}/>
                {/* <button >Eliminar tarea completa</button> */}
              </li>
            ))}
    </ul>
  </div>
)}
      </div>
    </div>
  );
}

export default MyTasks;

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
    <div className="tasks-container">
        <div className="tasks-header">
				  <p className="text-header"><DoneIcon/>My Todo-s</p>
          <div className="input-area">
            <input
                    type="text"
                    id='task-input'
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Insert a new task"
            />
            <button className='btn-enroll' onClick={handleAddTask}>Add</button>
			    </div>
        </div>
        <div>
        {/* Muestra los datos del objeto */}
        
        {profileData && (
  <div className='task-items-area'>
    <p className='text-body'>Incomplete Tasks:</p>
    <ul className=''>
        {profileData.incomplete.map((task) => (
              <li key={task.id}>
                <p>{task.text}</p>
                <DoneIcon onClick={() => handleCompleteTask(task.id)}/>
              </li>
        ))}
    </ul>

    <p className='text-body'>Complete Tasks:</p>
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

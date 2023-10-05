
import { useEffect, useState } from "react";
import { supabase } from '../../supabaseClient'
import NewCourseModal from "../modals/modal";

function Courses() {
    
  const [courses, setCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getCourses();
  }, []);
  

  async function getCourses() {
    const {data} = await supabase.from('courses').select('*');
      setCourses(data);
  }

    const handleRemove = async (courseId) => {
      try {
        await supabase.from('courses').delete().eq('id', courseId);
        setCourses(courses.filter((course) => course.id != courseId));
      } catch (error) {
        console.log('error', error);
      }};

  return (

    <div className='listing-courses'>
      <NewCourseModal    isModalOpen={isModalOpen} onClose={closeModal} />
      <button onClick={() => openModal()}>Add  a new course</button>
      <table className='courses-table'>
               <thead>
                <tr>
                    <th>Course</th>
                    <th>Hours</th>
                    <th>Description</th>
                    <th>Delete</th>
                </tr>
                </thead> 
      </table>
     
      {courses.map((course) => (
        <table className='courses-table'>
            <tbody>
              <tr>
                  <td key={course.name}>{course.name}</td>
                  <td key={course.hours}>{course.hours}</td>
                  <td key={course.description}>{course.description}</td>
                  <td className="operation">
                <button className="btn-remove" onClick={() => handleRemove(course.id)}>Delete</button>
                </td>
              </tr>
            </tbody>
        </table>
          ))} 
    </div>

  );
}

export default Courses;

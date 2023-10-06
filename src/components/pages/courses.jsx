
import { useEffect, useState } from "react";
import { supabase } from '../../supabaseClient'
import NewCourseModal from "../modals/modal";

function Courses() {
    
  const [courses, setCourses] = useState([]);
  const [isEnrolled, setIsEnrolled] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const studentIsEnrolled = () => {
    isEnrolled(false);
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

      const handleEnroll = async (courseId, studentID) => {
        try {
          await supabase.from('dasboard').insert([
            { course_ID: courseId, student_ID: studentID },
          ]);
          
        } catch (error) {
          console.log('error', error);
        }};

      async function testhandleEnroll() {        
        const { data: { user } } = await supabase.auth.getUser()
        const {data: dasboard} = await supabase.from('dasboard').select('*').eq('student_id', user.id);
            console.log(dasboard);
        };
        
       

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
                    <th>Enroll</th>
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
                    <button className="btn-remove" onClick={() => testhandleEnroll()}>Enroll</button>
                  </td>
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

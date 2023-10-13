import { useEffect, useState } from "react";
import { supabase } from '../../supabaseClient'


function EnrollCourses() {
    
  const [courses, setCourses] = useState([]);
 
  useEffect(() => {
    getCourses();
  }, []);
  

  async function getCourses() {
    const {data} = await supabase.from('courses').select('*');
      setCourses(data);
  }

       const handleEnroll = async (courseId) => {
        try {
          const { data: { user } }
          = await supabase.auth.getUser()
          const { error }=
          await supabase.from('dasboard').insert(
            { course_id: courseId, student_id: user.id, course_state: 'false'})
            if (error) {
              console.log(error.message);
            }
           } catch (error) {
            console.log('error', error);
        }};
      
        
          return(
            <div className="container">
            <div className='listing-courses'>
            <table className='courses-table'>
                     <thead>
                      <tr>
                          <th>Course</th>
                          <th>Hours</th>
                          <th>Description</th>
                          <th>Enroll</th>
                     
                      </tr>
                      </thead> 
            </table>
           
            {courses.map((course) => (
              <table className='courses-table' key={course.id}>
                  <tbody>
                    <tr >
                        <td key={course.name}>{course.name}</td> 
                        <td key={course.hours}>{course.hours}</td>
                        <td key={course.description}>{course.description}</td>
                        <td className="operation">
                          <button className="btn-enroll" onClick={() => handleEnroll(course.id)}>Enroll</button>
                        </td>
                    </tr>
                  </tbody>
              </table>
                ))} 
          </div>
        </div>
      
            
          );
          
        };

export default EnrollCourses;


import { useEffect, useState } from "react";
import { supabase } from '../../supabaseClient'
import NewCourseModal from "../modals/modal";

function Courses() {
    
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    getCourses();
  }, []);
  

  async function getCourses() {
    const {data} = await supabase.from('courses').select('*');
      setCourses(data);
  }

        return(
            <div className='listing-courses'>
            <table className='courses-table'>
                     <thead>
                      <tr>
                          <th>Course</th>
                          <th>Hours</th>
                          <th>Description</th>

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
                        
                    </tr>
                  </tbody>
              </table>
                ))} 
          </div>
      
            
          );
          
        };

export default Courses;


import { useEffect, useState } from "react";
import { supabase } from '../../supabaseClient'


export default function Dashboard() {
  
  const [myCourses, setMyCourses] = useState([]);
  const [isEnrolled, setIsEnrolled] = useState([]);

  
  const studentIsEnrolled = () => {
    isEnrolled(false);
  };

 useEffect(() => {
    getStudentCourses();
  }, []);
   

  async function getStudentCourses() {        
        const { data: { user } } = await supabase.auth.getUser()     
        const {data: myCourses} = await supabase.from('courses')
        .select('* , dasboard!inner(student_id)')
        .eq('dasboard.student_id', user.id); 
        setMyCourses(myCourses);
        };    
       

  return (

    <div className='listing-courses'>
        <table className='courses-table'>
               <thead>
                <tr>
                    <th>Course</th>
                    <th>Hours</th>
                    <th>Description</th>
                    <th>Dimiss</th>
                    
                </tr>
                </thead> 
      </table>
     
      {myCourses.map((course) => (
        <table className='courses-table'>
            <tbody>
              <tr>
                  <td key={course.name}>{course.name}</td>
                  <td key={course.hours}>{course.hours}</td>
                  <td key={course.description}>{course.description}</td>
                  <td className="operation">
                    <button className="btn-remove">Dimiss</button>
                  </td>
   
              </tr>
            </tbody>
        </table>
          ))} 
    </div>

  );
}

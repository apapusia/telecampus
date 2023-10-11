
import { useEffect, useState } from "react";
import { supabase } from '../../supabaseClient'


export default function Dashboard() {
  
  const [myCourses, setMyCourses] = useState([]);

 useEffect(() => {
    getStudentCourses();
  }, []);
   
  async function getStudentCourses() {        
        try{
        const { data: { user } } = await supabase.auth.getUser()     
        const {data: myCourses} = await supabase.from('courses')
        .select('* , dasboard!inner(student_id)')
        .eq('dasboard.student_id', user.id); 
        setMyCourses(myCourses);
      } catch (error) {
        console.log('error', error);
      }};  
       
  async function dropCourse(courseId) {        
    try{
    const { data: { user } } = await supabase.auth.getUser()     
    const {data: error} = await supabase.from('dasboard')
        .delete().match({student_id: user.id, course_id: courseId}); 
        getStudentCourses();
        if (error) {
          console.log(error);
        }
      } catch (error) {
        console.log('error', error);
      }}; 

  return (

    <div className='listing-courses'>
      <h2>My courses</h2>
        <table className='courses-table'>
               <thead>
                <tr>
                    <th>Course</th>
                    <th>Hours</th>
                    <th>Description</th>
                    <th>Drop</th>
                    
                </tr>
                </thead> 
      </table>
     
      {myCourses.map((course) => (
        <table className='courses-table' key={course.id}>
            <tbody>
              <tr>
                  <td key={course.name}>{course.name}</td>
                  <td key={course.hours}>{course.hours}</td>
                  <td key={course.description}>{course.description}</td>
                  <td className="operation">
                    <button className="btn-remove" onClick={() => dropCourse(course.id)}>Drop</button>
                  </td>
   
              </tr>
            </tbody>
        </table>
          ))} 
    </div>

  );
}

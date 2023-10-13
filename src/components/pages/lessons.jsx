import { useEffect, useState } from "react";
import { supabase } from '../../supabaseClient'
import Dashboard from "./dashboard";


function Lessons() {
    
  /* const [lessons, setLessons] = useState([]);
   
  useEffect(() => {
    getLessons();
  }, []);

  async function getLessons(courseId) {
    try{
      const {data: lessons, error} = await supabase.from('lessons')
      .select('*, courses(id)')
      .eq('course_id', courseId);
        setLessons(lessons);
        console.log(lessons);
      } catch (error) {
        console.log('error', error);
      }
  }  
   */
 /*  async function getLessons() {
    const {data} = await supabase.from('lessons').select('*');
      setLessons(data);
  }     */
        

          return(
            <div className="container">
            <div className='listing-lessons'>
                     
            {lessons.map((lesson) => (
              <div className='lessons-table' key={lesson.id}>
                        <div key={lesson.title}>{lesson.title}</div> 
                        <div key={lesson.state}>{lesson.state}</div>
                        <div key={lesson.score}>{lesson.score}</div>
                        <div className="operation">
                          <button className="btn-enroll">Take lesson</button>
                        </div>
                </div>
                ))} 
          </div>
        </div>
      
            
          );
          
        };

export default Lessons;

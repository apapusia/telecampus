import { useEffect, useState } from "react";
import { supabase } from '../../supabaseClient'



function Lessons() {
  
  const getId = localStorage.getItem('courseId')
  const [lessons, setLessons] = useState([]);
   
  useEffect(() => {

    getLessons();
  }, []);

  async function getLessons() {
    try{
      const {data: lessons} = await supabase.from('lessons')
      .select('*, courses(id)')
      .eq('course_id', getId);
        setLessons(lessons);
      } catch (error) {
        console.log('error', error);
      }
  }  
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

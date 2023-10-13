
import { useEffect, useState } from "react";
import { supabase } from '../../supabaseClient'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import aula from '../../assets/aula.jpg'
import Lessons from "./lessons";
import {Link} from 'react-router-dom';


export default function CourseCards() {
  
  const [myCourses, setMyCourses] = useState([]);
  const [lessons, setLessons] = useState([]);

  const setId = (courseId) => {
    localStorage.setItem('courseId', courseId)
    console.log('este es el setid', courseId);
};

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

 /*    async function getLessons(courseId) {

      try{
        const {data: lessons} = await supabase.from('lessons')
        .select('*, courses(id)')
        .eq('course_id', courseId);
          setLessons(lessons);
          console.log(lessons);
        } catch (error) {
          console.log('error', error);
        }
    }   */


  return (
    <div className="card-container">

    {myCourses.map((course) => (

    <Card sx={{ Width: 340 , minWidth: 320, m: 3 }} key={course.id}>
      <CardActionArea >
          
        <CardMedia
          component="img"
          height="140"
          image={aula}
          alt="aula"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" key={course.name}>
          {course.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" key={course.description}>
          {course.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" key={course.hours}>
          {course.hours}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="error" onClick={() => dropCourse(course.id)}>
          Drop
        </Button>
        <Link to='/lessons' ><p className="btn btn-primary" onClick={() => setId(course.id)}>MORE DETAILS</p></Link>
      </CardActions>
    </Card>
   )) }
   </div>
);
}



    {/* 
     
      {myCourses.map((course) => (
        <table className='courses-table' key={course.id}>
            
                  <td key={course.name}>{course.name}</td>
                  <td key={course.hours}>{course.hours}</td>
                  <td key={course.description}>{course.description}</td>
                  <td className="operation">
                    <button className="btn-drop" onClick={() => dropCourse(course.id)}>Drop</button>
                  </td>
   
       
          ))} 
    </div>
    </div> */}

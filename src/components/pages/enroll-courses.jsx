import { useEffect, useState } from "react";
import { supabase } from '../../supabaseClient'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



function EnrollCourses() {
    
  const [courses, setCourses] = useState([]);

  const UnsplashImages = [
    'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/fotos/mujer-colocando-notas-adhesivas-en-la-pared-Oalh2MojUuk',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];
 
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
      <div className="grid-card-container">
      {courses.map((course, index) => (

      <Card sx={{ Width: 340 , minWidth: 320, m: 3 }} key={course.id}>
        <CardActionArea onClick={() => setId(course.id)}>
          <CardMedia
            component="img"
            height="140"
            image={UnsplashImages[index]}
            alt={course.name}
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="div" key={course.name}>
            {course.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" key={course.description}>
            {course.description}
            </Typography>
            <Typography variant="body2" color="text.secondary" key={course.hours}>
            {course.hours} hours
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="error" onClick={() => handleEnroll(course.id)}>
            Enroll
          </Button>        
        </CardActions>
      </Card>
      )) }
      </div>
      );
      }
      

export default EnrollCourses;

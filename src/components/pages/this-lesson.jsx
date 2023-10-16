import { useEffect, useState } from "react";
import { supabase } from '../../supabaseClient';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  {Checkbox, CardActionArea, CardActions } from '@mui/material';

export default function ThisLesson(){
    const getLessonId = localStorage.getItem('lessonId')
    const [thisLesson, setThisLesson] = useState([]);
    const [thisLessonMaterials, setThisLessonMaterials] = useState([]);
    const [materialId, setmaterialId] = useState([]);
    const [isChecked, setIsChecked] = useState();

    useEffect(() => {
        getThisLesson();
        getThisLessonMaterials();       
      }, []);

      useEffect((materialId) => {
        // Consulta inicial para obtener el estado actual del dato
        supabase
          .from("materials")
          .select("checked").eq('id', materialId)
          .then(({ data, error }) => {
            if (error) {
              console.error("Error al consultar el dato en Superbase:", error);
            } else {
              setIsChecked(data[0].checked);
            }
          });
      }, []);

    async function getThisLesson() {
        const {data:thisLesson} = await supabase.from('lessons').select('*').eq('id',getLessonId);
        setThisLesson(thisLesson);
      }
    
    async function getThisLessonMaterials() {
       const {data:thisLessonMaterials} = await supabase.from('materials').select('*, lessons(id)').eq('lesson_id',getLessonId);
        setThisLessonMaterials(thisLessonMaterials);
    }

    const handleCheckboxChange = async (materialId) => {
      try {
        const { data, error } = await supabase.from('materials').update([{ checked: !isChecked }]).eq('id', materialId);  
        if (error) {
          console.error("Error al actualizar el dato en la base:", error);
        } else {
          setIsChecked(!isChecked);
        }
      } catch (error) {
        console.error("Error al conectar con la base:", error);
      }
    };


   
    return(
      <div className="lesson-container" >
        <div className="text-container" > 
        {thisLesson.map((lesson) => (
            <div key={lesson.id}>
            <p key={lesson.title}>{lesson.title}</p>
            <p key={lesson.content}>{lesson.content}</p>
            <p key={lesson.state}>{lesson.state}</p>
            <p key={lesson.score}>{lesson.score}</p>
            </div>
            ))};
        </div>

      <div className="material-container" >  
        {thisLessonMaterials.map((material) => (
          <Card sx={{width:250, minHeight: 200, m: 2 }} key={material.id}>
            <CardActionArea component="a" href={material.link} target="_blank">
              <CardMedia
                component="iframe"
                height="140"
                src={material.link}
                alt="link"
              />
              <CardContent sx={{ display: 'inline-flex', alignItems: 'center' }}>
                <Typography sx={{ fontSize: 16, pb: 0 }} component="div" key={material.name}>
                {material.name}
                </Typography>
                <Checkbox
                  checked={isChecked}
                  name="checked"
                  onClick={() => handleCheckboxChange(material.id)}
                  inputProps={{ 'aria-label': 'controlled' }}
                /> 
              </CardContent>
            </CardActionArea>
          </Card>

            )) }  
      </div>  
      </div>     
    );}
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://ifenhtfedffkotsqiuuy.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmZW5odGZlZGZma290c3FpdXV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwMTEzMTgsImV4cCI6MjAxMTU4NzMxOH0.jdKA0tEJguoBAeoY_DdYunhnyWdZpFuaNrj-4ye6m4g");

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  async function getCourses() {
    const {data} = await supabase.from('courses').select('name');
      setCourses(data);
  }

  return (
    <ul>
      {courses.map((course) => (
        <li key={course.name}>{course.name}</li>
      ))}
    </ul>
  );
}

export default Courses;

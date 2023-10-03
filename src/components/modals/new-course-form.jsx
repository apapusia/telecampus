import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://ifenhtfedffkotsqiuuy.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmZW5odGZlZGZma290c3FpdXV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwMTEzMTgsImV4cCI6MjAxMTU4NzMxOH0.jdKA0tEJguoBAeoY_DdYunhnyWdZpFuaNrj-4ye6m4g");

export default function NewCourse() {

  
  const [name, setName] = useState('');
  const [hours, setHours] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
      new_course({name: name, hours: hours, description:description})
      event.preventDefault();
  };

  const handleName = (event) => {
      event.preventDefault();
      setName(event.target.value)
  };

  const handleHours = (event) => {
      event.preventDefault();
      setHours(event.target.value)
  }
  const handleDescription = (event) => {
      event.preventDefault();
      setDescription(event.target.value)
  }

  const new_course = async () => {
      const {data, error} = 
      await supabase
          .from('courses')
          .insert([
              {name: name, hours: hours, description: description}
          ])
  };

  return (
      <div>
          <h1>
              Add a new course
          </h1>
              <form onSubmit={handleSubmit}>
                  
                  <input onChange={handleName} type="text" value={name} placeholder="Name" autoComplete="false" /><br></br>
                  <input onChange={handleHours} type="integer" value={hours} placeholder="hours" autoComplete="false" /><br></br>
                  <input onChange={handleDescription} type="text" value={description} placeholder="description" autoComplete="false" /><br />
                  <button>Add</button>
              </form>
      </div>
  )
}
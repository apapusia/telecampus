import React, {Component} from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import {Button} from 'reactstrap';


export default class NewCourseForm extends Component {
    constructor(props){
      super(props);

    }

    render() {
      return(
        <Formik
        initialValues={{
        id: '',
        name: '',
        hours: '',
        info: '',
        }}
        onSubmit={async (values, {resetForm}) => {
        await new Promise((r) => setTimeout(r, 500));
        axios.post("http://localhost:3000/courses", values).then((response) => {
        console.log(response.status, response.data);
        resetForm({values:''});

          })
      }}
    >  
        <Form>
                <label htmlFor="name">Course name</label>
                <Field id="name" name="name" placeholder="new course name" />

                <label htmlFor="hours">Hours</label>
                <Field id="hours" name="hours" placeholder="hours" />

                <label htmlFor="info">Description</label>
                <Field
                id="info"
                name="info"
                placeholder="details about the course"
                type="text"
                />
                <Button type="submit">Submit</Button>
                
              
            </Form>
        </Formik>
          
      );
    }
  }

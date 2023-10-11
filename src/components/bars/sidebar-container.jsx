import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { supabase } from '../../supabaseClient'
import { useState, useEffect } from 'react' 


export default function SidebarComponent(){
  const [session, setSession] = useState(null);

  const {
    data } = supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session);
  });  

    if (!session) {
      return (
          <div>  </div>
      );
    } else {
      return(
      <div className='sidebar'>
        <ul>
          <li><Link to='/courses'>Courses list</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
       
        </ul>
      </div>   
      );
      
    };


  }
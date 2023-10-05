import React, {Component} from 'react';
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { supabase } from '../../supabaseClient'
import { Auth } from "@supabase/auth-ui-react";


export default function Navbar (){
  
  
 
    return(
    <div className='navbar'>
  
      <div>Logged in!</div>
      <button onClick={() => supabase.auth.signOut()}>Sign out</button>
    </div>
    );
  }

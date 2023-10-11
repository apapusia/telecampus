import React, {Component} from 'react';
import {useNavigate} from 'react-router-dom';
import studing from '../../assets/studing-at-home.jpg'



export default function Home (){  
    const nav = useNavigate();
   

return (
    <div>
    <img src={studing} alt="studing" />
    
        <div className='home-container'>            
            <button onClick={() => nav("/courses")}>Courses list</button>
        </div>   
    </div>
    );
}
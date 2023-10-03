import React, {Component} from 'react';
import {Link, BrowserRouter} from 'react-router-dom'; 


export default class SidebarComponent extends Component {
  constructor(){
    super();
  }
  
  render() {
    return(
    <div className='sidebar'>
      <ul>
        <li><Link to='/'>Dashboard</Link></li>
        <li><Link to='/courses'>Courses</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/logged-out'>Exit</Link></li> 
        <li><Link to='/logged-out2'>form</Link></li>
        <li><Link to='/modal'>modal</Link></li> 
      </ul>
    
    </div>        
    );
  }
}
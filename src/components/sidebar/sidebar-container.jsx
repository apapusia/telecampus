import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 


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
       {/*  <li><Link to='/'>Home</Link></li>  */}
        <li><Link to='/login'>Login</Link></li>
     
      </ul>
    
    </div>        
    );
  }
}
import React, {Component} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarComponent from './sidebar/sidebar-container';
import Navbar from './sidebar/navbar';
import Dashboard from './pages/dashboard';
import Courses from './pages/courses';
import Profile from './pages/profile';
import LoggedOut from './pages/logged-out';


export default class App extends Component {
  constructor(){
    super();
  }
  
    render() {
      return (
        <div className='flex-container'>
          <div>
            <Navbar/>
            <div className='sidebar-items'>                     
              <BrowserRouter>
                <SidebarComponent/> 
                <Routes>
                  <Route path='/' element={<Dashboard />}/>
                  <Route path='/courses' element={<Courses />}/>
                  <Route path='/profile' element={<Profile />}/>
                  <Route path='/logged-out' element={<LoggedOut />}/>
                </Routes>
              </BrowserRouter>
            </div>           
          </div>
        </div>
      );
    
    }
  }


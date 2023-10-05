import React, {Component} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarComponent from '../sidebar/sidebar-container';
import Navbar from '../sidebar/navbar';
import Dashboard from './dashboard';
import Courses from './courses';
import Profile from './profile';
import '../../style/main.scss'


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
                
                 
                </Routes>
              </BrowserRouter>
            </div>           
          </div>
        </div>
      );
    
    }
  }

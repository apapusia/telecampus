import React, {Component} from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SidebarComponent from './components/bars/sidebar-container';
import Navbar from './components/bars/navbar';
import Dashboard from './components/pages/dashboard';
import Home from './components/pages/home';
import './style/main.scss'
import Profile from './components/pages/profile';
import Login from './components/login_auth/auth';
import AdminCourses from './components/admin/admin-courses';
import EnrollCourses from './components/pages/enroll-courses';
import Courses from './components/pages/courses';
import Lessons from './components/pages/lessons';
import ThisLesson from './components/pages/this-lesson';


export default function App(){

  const SidebarLayout = () => (
    <>
      <SidebarComponent />
      <Outlet />
    </>
  );

      return (
        <div >
              <BrowserRouter>
                <Navbar/>
                <div className='app-container'>                         
                  <Routes>
                  <Route element={<SidebarLayout/>}>
                    <Route path='/dashboard' element={<Dashboard />}/>
                    <Route path='/profile' element={<Profile />}/> 
                    <Route path='/admin-courses' element={<AdminCourses />}/> 
                    <Route path='/enroll-courses' element={<EnrollCourses />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/lessons' element={<Lessons />}/>
                    <Route path='/this-lesson' element={<ThisLesson />}/>
                    
                    
                  </Route>
                    <Route path='/' element={<Home />}/>
                    <Route path='/courses' element={<Courses />}/>
                  </Routes>
                  </div>
              </BrowserRouter>
            </div>           
          
        
      );
    
    }
  

import React from 'react'
import { createRoot } from 'react-dom/client';
import Login from './components/login';
import Courses from './components/pages/courses';

const container = document.getElementById('root');

const root = createRoot(container);
root.render(<Login tab='home' />);

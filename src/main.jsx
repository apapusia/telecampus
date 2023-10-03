import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './components/app';
import Courses from './components/pages/courses';

const container = document.getElementById('root');

const root = createRoot(container);
root.render(<App tab='home' />);

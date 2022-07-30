import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContactPage from './components/pages/ContactPage/ContactPage';
import HomePage from './components/pages/HomePage/HomePage';
import InfoPage from './components/pages/InfoPage/InfoPage';
import ProjectsPage from './components/pages/ProjectsPage/ProjectsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/projects' element={<ProjectsPage/>}/>
      <Route path='/about' element={<InfoPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>
    </Routes>
  );
}

export default App;

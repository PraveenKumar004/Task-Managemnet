import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/dashboard';
import Task from './pages/tasks'

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tasks' element={<Task/>}/>
      </Routes>
    </Router>
  );
};

export default App;

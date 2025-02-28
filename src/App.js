import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Impact from './components/pages/Impact';
import Participate from './components/pages/Participate';
import SplineScene from './components/SplineScene';

function App() {
  return (
    <>
    <SplineScene />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/impact' element={<Impact />} />
          <Route path='/participate' element={<Participate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

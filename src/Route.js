import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Testimontial from './pages/testimonials';
import Tutors from './pages/tutorslisiting';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonials" element={<Testimontial />} />
        <Route path="/tutors" element={<Tutors />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
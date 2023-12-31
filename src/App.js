import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Courses from './components/Courses';
import Register from './components/Register';
import Login from './components/Login';
import { AddCourse } from './components/AddCourse'
import { AllCourse } from './components/AllCourse'
import { DashBoard } from './components/DashBoard'
import { CourseUpdate } from './components/CourseUpdate';

const App = () => {
  return (
    <Router>
      <div style={{background:'#f0f0f0'}}>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/addcourses" element={<AddCourse/>} />
          <Route path="/allcourses" element={<AllCourse/>} />
          <Route path="/dashboard" element={<DashBoard/>} />
          <Route path="/edit/:id" element={<CourseUpdate/>} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
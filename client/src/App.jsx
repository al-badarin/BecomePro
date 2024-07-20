import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import AboutUs from './components/about-us/AboutUs';
import Trainers from './components/trainers/Trainers';
import Contact from './components/contact/Contact';
// import Health from "./components/Health";
// import Info from "./components/Info";
import Login from './components/login/Login';
import Footer from './components/footer/Footer';
import Register from './components/register/Register';
import HeroSlider from './components/hero-slider/HeroSlider';

const App = () => {
  return (
    <>
      <div class="hero_area">
        <Header />

        {/* TODO: for what purpose to use HeroSlider */}
        <HeroSlider />
      </div>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;

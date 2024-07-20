import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Header from './components/header/Header';
import HeroSlider from './components/hero-slider/HeroSlider';
import ArticleCatalog from './components/article-catalog/ArticleCatalog';
import AboutUs from './components/about-us/AboutUs';
import Trainers from './components/trainers/Trainers';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';
import Footer from './components/footer/Footer';

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
          <Route path="/articles" element={<ArticleCatalog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;

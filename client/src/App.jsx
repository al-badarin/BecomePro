import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as authService from './services/authService';

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

import AuthContext from './contexts/authContext';

const App = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const [error, setError] = useState(null);

  // const initialValues = {
  //   email: '',
  //   password: '',
  // };

  const loginSubmitHandler = async (values) => {
    try {
      const result = await authService.login(values.email, values.password);

      setAuth(result);

      localStorage.setItem('accessToken', result.accessToken);

      navigate('/');

      console.log('Login successful:', result);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="hero_area">
        <Header />

        {/* TODO: for what purpose to use HeroSlider */}
        <HeroSlider />
      </div>

      <main>
        <AuthContext.Provider value={{ loginSubmitHandler }}>
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
        </AuthContext.Provider>
      </main>

      <Footer />
    </>
  );
};

export default App;

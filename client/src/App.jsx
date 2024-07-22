import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as authService from './services/authService';

import Home from './components/home/Home';
import Header from './components/header/Header';
import HeroSlider from './components/hero-slider/HeroSlider';
import ArticleCatalog from './components/article-catalog/ArticleCatalog';
import ArticleCreate from './components/article-create/ArticleCreate';
import AboutUs from './components/about-us/AboutUs';
import Trainers from './components/trainers/Trainers';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';
import Footer from './components/footer/Footer';

import AuthProvider from './contexts/authContext';

const App = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');

    return {};
  });
  const [error, setError] = useState(null);

  const loginSubmitHandler = async (values) => {
    try {
      const result = await authService.login(values.email, values.password);

      setAuth(result);

      localStorage.setItem('accessToken', result.accessToken);

      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const registerSubmitHandler = async (values) => {
    if (values.password !== values.repassword) {
      setError('Passwords do not match');

      return;
    }

    try {
      const result = await authService.register(
        values.email,
        values.username,
        values.password
      );

      setAuth(result);

      localStorage.setItem('accessToken', result.accessToken);

      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const logoutHandler = () => {
    setAuth({});

    localStorage.removeItem('accessToken');
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthProvider value={values}>
      <div className="hero_area">
        <Header />

        {/* TODO: for what purpose to use HeroSlider */}
        <HeroSlider />
      </div>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticleCatalog />} />
          <Route path="/articles/create" element={<ArticleCreate />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>

      <Footer />
    </AuthProvider>
  );
};

export default App;

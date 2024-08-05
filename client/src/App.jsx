import { Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Header from './components/header/Header';
import ArticleCatalog from './components/article-catalog/ArticleCatalog';
import ArticleDetails from './components/article-details/ArticleDetails';
import ArticleCreate from './components/article-create/ArticleCreate';
import ArticleEdit from './components/article-edit/ArticleEdit';
import AboutUs from './components/home/about-us/AboutUs';
import Trainers from './components/trainers/Trainers';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';
import Footer from './components/footer/Footer';

import { AuthProvider } from './contexts/authContext';
import AuthGuard from './components/guards/AuthGuard';
import GuestGuard from './components/guards/GuestGuard';
import ErrorBoundary from './components/errors/error-boundary/ErrorBoundary';
import NotAuthorized from './components/errors/error-401/NotAuthorized';
import NotFound from './components/errors/error-404/NotFound';

import styles from './App.module.css';

const App = () => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <main className={styles.main}>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticleCatalog />} />
            <Route path="/articles/:articleId" element={<ArticleDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/contact" element={<Contact />} />

            <Route element={<GuestGuard />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            <Route element={<AuthGuard />}>
              <Route path="/articles/create" element={<ArticleCreate />} />
              <Route
                path="/articles/:articleId/edit" element={<ArticleEdit />} />
              <Route path="/logout" element={<Logout />} />
            </Route>

            {/* 401 Page */}
            <Route path="/401" element={<NotAuthorized />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;

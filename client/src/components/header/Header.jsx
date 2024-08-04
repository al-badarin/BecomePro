import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import AuthContext from '../../contexts/authContext';

import styles from './Header.module.css';

export default function Header() {
  const { isAuthenticated, username } = useContext(AuthContext);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          {/* LOGO */}
          <Link className="navbar-brand" to="/">
            <div className={styles.logoContainer}>
              <img
                src="/images/logo.png"
                alt="Football Logo"
                className={styles.logoImage}
              />

              <span className={styles.brandName}>BecomePro</span>
            </div>
          </Link>

          {/* TOGGLER */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav">
                {/* HOME  */}
                <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>

                {/* ARTICLES  */}
                <li
                  className={`nav-item ${
                    isActive('/articles') ? 'active' : ''
                  }`}
                >
                  <Link className="nav-link" to="/articles">
                    Articles
                  </Link>
                </li>

                {/* ABOUT  */}
                <li
                  className={`nav-item ${isActive('/about') ? 'active' : ''}`}
                >
                  <Link className="nav-link" to="/about">
                    About us
                  </Link>
                </li>

                {/* TRAINERS  */}
                <li
                  className={`nav-item ${
                    isActive('/trainers') ? 'active' : ''
                  }`}
                >
                  <Link className="nav-link" to="/trainers">
                    Trainers
                  </Link>
                </li>

                {/* CONTACT  */}
                <li
                  className={`nav-item ${isActive('/contact') ? 'active' : ''}`}
                >
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>

                {isAuthenticated && (
                  <>
                    {/* CREATE */}
                    <li
                      className={`nav-item ${
                        isActive('/articles/create') ? 'active' : ''
                      }`}
                    >
                      <Link className="nav-link" to="/articles/create">
                        Create Article
                      </Link>
                    </li>

                    {/* LOGOUT */}
                    <li
                      className={`nav-item ${
                        isActive('/logout') ? 'active' : ''
                      }`}
                    >
                      <Link className="nav-link" to="/logout">
                        Logout
                      </Link>
                    </li>
                  </>
                )}

                {!isAuthenticated && (
                  <>
                    {/* LOGIN  */}
                    <li
                      className={`nav-item ${
                        isActive('/login') ? 'active' : ''
                      }`}
                    >
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>

                    {/* REGISTER  */}
                    <li
                      className={`nav-item ${
                        isActive('/register') ? 'active' : ''
                      }`}
                    >
                      <Link className="nav-link" to="/register">
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>

              {/* SEARCH */}
              {/* TODO: move as a separate component */}
              {/* <div className="user_option">
                <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                  <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  ></button>
                </form>
              </div> */}

              {isAuthenticated && (
                <span className={styles.username}>| {username}</span>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

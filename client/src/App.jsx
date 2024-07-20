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

const App = () => {
  return (
    <>
      <div class="hero_area">
        <Header />

        <section class=" slider_section position-relative">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container">
                  <div class="col-lg-10 col-md-11 mx-auto">
                    <div class="detail-box">
                      <div>
                        <h3>Fitness</h3>
                        <h2>Training</h2>
                        <h1>Neogym</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse .
                        </p>
                        <div class="">
                          <a href="">Contact Us</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container">
                  <div class="col-lg-10 col-md-11 mx-auto">
                    <div class="detail-box">
                      <div>
                        <h3>Fitness</h3>
                        <h2>Training</h2>
                        <h1>Neogym</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse .
                        </p>
                        <div class="">
                          <a href="">Contact Us</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container">
                  <div class="col-lg-10 col-md-11 mx-auto">
                    <div class="detail-box">
                      <div>
                        <h3>Fitness</h3>
                        <h2>Training</h2>
                        <h1>Neogym</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse .
                        </p>
                        <div class="">
                          <a href="">Contact Us</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container">
                  <div class="col-lg-10 col-md-11 mx-auto">
                    <div class="detail-box">
                      <div>
                        <h3>Fitness</h3>
                        <h2>Training</h2>
                        <h1>Neogym</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse .
                        </p>
                        <div class="">
                          <a href="">Contact Us</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container">
                  <div class="col-lg-10 col-md-11 mx-auto">
                    <div class="detail-box">
                      <div>
                        <h3>Fitness</h3>
                        <h2>Training</h2>
                        <h1>Neogym</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse .
                        </p>
                        <div class="">
                          <a href="">Contact Us</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="4"
              ></li>
            </ol>
          </div>
        </section>
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

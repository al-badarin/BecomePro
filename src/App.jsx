import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Health from "./components/Health";
import Trainers from "./components/Trainers";
import Contact from "./components/Contact";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Hero />
      
      //TODO: (slider_section position-relative) is not showing
      <section className="slider_section position-relative">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="col-lg-10 col-md-11 mx-auto">
                  <div className="detail-box">
                    <div>
                      <h3>Fitness</h3>
                      <h2>Training</h2>
                      <h1>Neogym</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse .
                      </p>
                      <div className="">
                        <a href="">Contact Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="col-lg-10 col-md-11 mx-auto">
                  <div className="detail-box">
                    <div>
                      <h3>Fitness</h3>
                      <h2>Training</h2>
                      <h1>Neogym</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse .
                      </p>
                      <div className="">
                        <a href="">Contact Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="col-lg-10 col-md-11 mx-auto">
                  <div className="detail-box">
                    <div>
                      <h3>Fitness</h3>
                      <h2>Training</h2>
                      <h1>Neogym</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse .
                      </p>
                      <div className="">
                        <a href="">Contact Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="col-lg-10 col-md-11 mx-auto">
                  <div className="detail-box">
                    <div>
                      <h3>Fitness</h3>
                      <h2>Training</h2>
                      <h1>Neogym</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse .
                      </p>
                      <div className="">
                        <a href="">Contact Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="col-lg-10 col-md-11 mx-auto">
                  <div className="detail-box">
                    <div>
                      <h3>Fitness</h3>
                      <h2>Training</h2>
                      <h1>Neogym</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse .
                      </p>
                      <div className="">
                        <a href="">Contact Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            <li data-target="#carouselExampleIndicators" data-slide-to={3} />
            <li data-target="#carouselExampleIndicators" data-slide-to={4} />
          </ol>
        </div>
      </section>

      <AboutUs/>

      <Trainers/>

      <Health/>

      <Contact/>

      <Info/>

      <Footer />
    </div>
  );
}

export default App;

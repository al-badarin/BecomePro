import { Link } from 'react-router-dom';

import styles from './HeroSlider.module.css'

export default function HeroSlider() {
  return (
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
                    <h3>Master the Game</h3>
                    <h2>All-Round Football Development</h2>
                    <span className={styles.becomePro}>BecomePro</span>
                    <p>
                      Explore comprehensive training programs, expert nutrition
                      advice, and tactical insights to elevate your football
                      skills. Whether you're looking to improve your physical
                      fitness, mental game, or on-field tactics, BecomePro
                      provides the resources you need to become a complete
                      football player.
                    </p>
                    <div>
                      <Link to="/contact">Contact Us</Link>
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
                    <h3>Train Like a Pro</h3>
                    <h2>Elite Training Programs</h2>
                    <span className={styles.becomePro}>BecomePro</span>
                    <p>
                      Discover specialized workouts designed for football
                      players. From strength and conditioning to speed and
                      agility drills, our training programs are tailored to help
                      you reach your peak performance on the pitch.
                    </p>
                    <div>
                      <Link to="/articles">Explore Articles</Link>
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
                    <h3>Fuel Your Performance</h3>
                    <h2>Nutrition for Footballers</h2>
                    <span className={styles.becomePro}>BecomePro</span>
                    <p>
                      Learn about the best dietary practices to fuel your body
                      and enhance recovery. Our expert guides cover everything
                      from meal planning to hydration strategies, ensuring you
                      have the energy to perform at your best.
                    </p>
                    <div>
                      <Link to="/articles">Read More</Link>
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
                    <h3>Mental Toughness</h3>
                    <h2>Mindset Training</h2>
                    <span className={styles.becomePro}>BecomePro</span>
                    <p>
                      Develop the mental resilience needed to excel in football.
                      Our resources offer strategies to boost your confidence,
                      stay focused under pressure, and maintain a positive
                      attitude both on and off the field.
                    </p>
                    <div>
                      <Link to="/articles">Learn More</Link>
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
                    <h3>Tactical Mastery</h3>
                    <h2>Understanding the Game</h2>
                    <span className={styles.becomePro}>BecomePro</span>
                    <p>
                      Gain deeper insights into the tactical aspects of
                      football. Our articles cover formations, strategies, and
                      decision-making processes to help you understand the game
                      at a higher level.
                    </p>
                    <div>
                      <Link to="/articles">Explore Tactics</Link>
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
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
      </div>
    </section>
  );
}

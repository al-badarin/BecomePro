export default function Trainers() {
  return (
    <section className="trainer_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Our Coaches</h2>
        </div>
        <div className="row">
          {/* DIMITAR */}
          <div className="col-lg-4 col-md-6 mx-auto">
            <div className="box">
              <div className="name">
                <h5>Dimitar Ivanov</h5>
              </div>
              <div className="img-box">
                <img
                  src="images/mitko_cska.jpg"
                  alt="Trainer Photo - Dimitar"
                />
              </div>
              <div className="social_box">
                <a href="">
                  <img src="images/facebook-logo.png" alt="" />
                </a>
                <a href="">
                  <img src="images/twitter.png" alt="" />
                </a>
                <a href="">
                  <img src="images/instagram-logo.png" alt="" />
                </a>
              </div>
            </div>
          </div>

          {/* JAMAL */}
          <div className="col-lg-4 col-md-6 mx-auto">
            <div className="box">
              <div className="name">
                <h5>Jamal Al Badarin</h5>
              </div>
              <div className="img-box">
                <img
                  src="images/jim-point-up.jpg"
                  alt="Trainer Photo - Jamal"
                />
              </div>
              <div className="social_box">
                <a href="">
                  <img src="images/facebook-logo.png" alt="" />
                </a>
                <a href="">
                  <img src="images/twitter.png" alt="" />
                </a>
                <a href="">
                  <img src="images/instagram-logo.png" alt="" />
                </a>
              </div>
            </div>
          </div>

          {/* YORDAN */}
          <div className="col-lg-4 col-md-6 mx-auto">
            <div className="box">
              <div className="name">
                <h5>Yordan Zhelev</h5>
              </div>
              <div className="img-box">
                <img
                  src="images/dancho-official.jpg"
                  alt="Trainer Photo - Yordan"
                />
              </div>
              <div className="social_box">
                <a href="">
                  <img src="images/facebook-logo.png" alt="" />
                </a>
                <a href="">
                  <img src="images/twitter.png" alt="" />
                </a>
                <a href="">
                  <img src="images/instagram-logo.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

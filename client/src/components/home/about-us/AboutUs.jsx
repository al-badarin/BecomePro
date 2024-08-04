export default function AboutUs() {
  return (
    <section className="us_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Why Choose Us</h2>
        </div>

        <div className="us_container">
          <div className="row">
            {/* QUALITY EQUIPMENT */}
            <div className="col-lg-3 col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="images/u-1.png" alt="Quality Equipment" />
                </div>
                <div className="detail-box">
                  <h5>QUALITY EQUIPMENT</h5>
                  <p>
                    We provide state-of-the-art equipment designed for football
                    training, ensuring you get the best out of every session.
                    Our gear supports everything from basic drills to advanced
                    training techniques.
                  </p>
                </div>
              </div>
            </div>

            {/* NUTRITION */}
            <div className="col-lg-3 col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="images/u-4.png" alt="Nutrition" />
                </div>
                <div className="detail-box">
                  <h5>NUTRITION</h5>
                  <p>
                    Our nutrition guides are tailored for footballers, offering
                    detailed meal plans and nutritional advice to enhance
                    performance, recovery, and overall health. Eat right to play
                    your best game.
                  </p>
                </div>
              </div>
            </div>

            {/* HEALTHY DIET PLAN */}
            <div className="col-lg-3 col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="images/u-2.png" alt="Healthy Diet Plan" />
                </div>
                <div className="detail-box">
                  <h5>HEALTHY DIET PLAN</h5>
                  <p>
                    We provide comprehensive diet plans that focus on balanced
                    nutrition, helping players maintain peak physical condition
                    and energy levels. Our plans are designed to complement
                    intense training schedules.
                  </p>
                </div>
              </div>
            </div>

            {/* SPORT TRAINING */}
            <div className="col-lg-3 col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="images/u-3.png" alt="Sport Training" />
                </div>
                <div className="detail-box">
                  <h5>SPORT TRAINING</h5>
                  <p>
                    Our expert coaches provide top-tier training programs that
                    cover technical skills, tactical understanding, physical
                    conditioning, and mental toughness. Whether you're a
                    beginner or a pro, we help you excel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

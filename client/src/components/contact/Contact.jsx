export default function Contact() {
  return (
    <>
      <section className="contact_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="img-box">
                <img src="images/contact-img.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="form_container pr-0 pr-lg-5 mr-0 mr-lg-2">
                <div className="heading_container">
                  <h2>Contact Us</h2>
                </div>
                <form action="">
                  <div>
                    <input type="text" placeholder="Name" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="message-box"
                      placeholder="Message"
                    />
                  </div>
                  <div className="d-flex ">
                    <button>Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

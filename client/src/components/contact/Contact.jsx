import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Contact.module.css';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a successful form submission
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 1000);
  };

  return (
    <>
      <section className={styles.contactSection}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 px-0">
              <div className={styles.imgBox}>
                <img src="images/contact-img.jpg" alt="Contact" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div
                className={`${styles.formContainer} pr-0 pr-lg-5 mr-0 mr-lg-2`}
              >
                <div className={styles.headingContainer}>
                  <h2>Contact Us</h2>
                </div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="message"
                      className={styles.messageBox}
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex ">
                    <button type="submit">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}

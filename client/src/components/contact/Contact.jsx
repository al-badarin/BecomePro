import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Contact.module.css';

export default function Contact() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      phone: Yup.string()
        .min(10, 'Phone number must be at least 10 digits')
        .required('Phone number is required'),
      message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        .required('Message is required'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      // Simulate a successful form submission
      setTimeout(() => {
        toast.success('Message sent successfully!');
        setTimeout(() => {
          navigate('/');
        }, 2000);
        setSubmitting(false);
      }, 1000);
    },
  });

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
                <form onSubmit={formik.handleSubmit}>
                  {/* NAME */}
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`${styles.input} ${formik.touched.name && formik.errors.name ? styles.invalid : ''}`}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className={styles.error}>{formik.errors.name}</div>
                    ) : null}
                  </div>
                  {/* EMAIL */}
                  <div className={styles.formGroup}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`${styles.input} ${formik.touched.email && formik.errors.email ? styles.invalid : ''}`}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className={styles.error}>{formik.errors.email}</div>
                    ) : null}
                  </div>
                  {/* PHONE */}
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`${styles.input} ${formik.touched.phone && formik.errors.phone ? styles.invalid : ''}`}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className={styles.error}>{formik.errors.phone}</div>
                    ) : null}
                  </div>
                  {/* MESSAGE */}
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="message"
                      className={`${styles.messageBox} ${formik.touched.message && formik.errors.message ? styles.invalid : ''}`}
                      placeholder="Message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.message && formik.errors.message ? (
                      <div className={styles.error}>{formik.errors.message}</div>
                    ) : null}
                  </div>
                  <div className="d-flex ">
                    <button type="submit" className={styles.button} disabled={formik.isSubmitting}>
                      Send
                    </button>
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

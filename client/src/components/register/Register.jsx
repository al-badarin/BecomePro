import { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import AuthContext from '../../contexts/authContext';
import { Link } from 'react-router-dom';

import styles from './Register.module.css';

export default function Register() {
  const { registerSubmitHandler, errorMessage } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      repassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      username: Yup.string()
        .min(3, 'Username must be at least 3 characters')
        .required('Username is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      repassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: async (values) => {
      await registerSubmitHandler(values);
    },
  });

  return (
    <div className={styles.container}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>Register</h3>
            </div>
            <div className={styles.cardBody}>
              {/* ERROR MESSAGE */}
              {errorMessage && (
                <div
                  className={`alert alert-danger ${styles.alert}`}
                  role="alert"
                >
                  {errorMessage}
                </div>
              )}

              <form onSubmit={formik.handleSubmit}>
                {/* EMAIL */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  {/* EMAIL INPUT */}
                  <input
                    type="email"
                    className={`form-control ${
                      formik.touched.email && formik.errors.email
                        ? 'is-invalid'
                        : ''
                    }`}
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {/* EMAIL ERRORS */}
                  {formik.touched.email && formik.errors.email ? (
                    <div className="invalid-feedback">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>

                {/* USERNAME */}
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  {/* USERNAME INPUT */}
                  <input
                    type="text"
                    className={`form-control ${
                      formik.touched.username && formik.errors.username
                        ? 'is-invalid'
                        : ''
                    }`}
                    id="username"
                    name="username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                  />
                  {/* USERNAME ERRORS */}
                  {formik.touched.username && formik.errors.username ? (
                    <div className="invalid-feedback">
                      {formik.errors.username}
                    </div>
                  ) : null}
                </div>

                {/* PASSWORD */}
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  {/* PASSWORD INPUT */}
                  <input
                    type="password"
                    className={`form-control ${
                      formik.touched.password && formik.errors.password
                        ? 'is-invalid'
                        : ''
                    }`}
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {/* PASSWORD ERRORS */}
                  {formik.touched.password && formik.errors.password ? (
                    <div className="invalid-feedback">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>

                {/* REPASSWORD */}
                <div className="form-group">
                  <label htmlFor="repassword">Confirm Password</label>
                  {/* REPASSWORD INPUT */}
                  <input
                    type="password"
                    className={`form-control ${
                      formik.touched.repassword && formik.errors.repassword
                        ? 'is-invalid'
                        : ''
                    }`}
                    id="repassword"
                    name="repassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.repassword}
                  />
                  {/* REPASSWORD ERRORS */}
                  {formik.touched.repassword && formik.errors.repassword ? (
                    <div className="invalid-feedback">
                      {formik.errors.repassword}
                    </div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className={`btn ${styles.btnSubmit} mt-3`}
                >
                  Register
                </button>
              </form>
              <div className="mt-3">
                <p>
                  Already have an account?{' '}
                  <Link to="/login" className={styles.link}>
                    Login here
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

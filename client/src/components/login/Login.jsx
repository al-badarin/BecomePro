import { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import AuthContext from '../../contexts/authContext';
import { Link } from 'react-router-dom';

export default function Login() {
  const { loginSubmitHandler, errorMessage } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      await loginSubmitHandler(values);
    },
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              {/* ERROR MESSAGE */}
              {errorMessage && (
                <div className="alert alert-danger" role="alert">
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
                
                <input
                  type="submit"
                  className="btn btn-primary mt-3"
                  value="Login"
                />
              </form>
              <div className="mt-3">
                <p>
                  Don't have an account?{' '}
                  <Link to="/register">Sign up here</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

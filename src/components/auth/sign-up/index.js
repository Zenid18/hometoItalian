// import Popimg from '../../assets/images/pop-img.png';
import React, { useState } from "react";
import './style.css';
import '../../../App.css';
import Loginimg from "../../../assets/image/loginlogo.png";
import Google from '../../../assets/image/google.png';
import Facebook from '../../../assets/image/facebook.png';
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { userSignUp } from "../../../redux/services/AuthService";
import { toast } from "react-toastify";
const SignUp = (props) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(true)
  const [confirmShow, setConfirmShow] = useState(true)
  const moveToLogin = () => {
    props?.setSignUp(false)
    props?.setLogin(true)
  }
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      confirm_password: ""
    },
    validationSchema: Yup.object({
      fname: Yup?.string().required("First Name is required"),
      lname: Yup?.string().required("Last Name is required"),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
      confirmPass: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: async () => {
      props?.setSignUp(false)
      const body = {
        first_name: formik?.values?.fname,
        last_name: formik?.values?.lname,
        email_id: formik?.values?.email,
        password: formik?.values?.password,
        confirm_password: formik?.values?.confirmPass
      }
      // const res = await dispatch(userSignUp(body))
      // if (res?.status == 200 || res?.success == true) {

      //   props?.setSignUp(false)
      //   toast.success(res?.message);
      // }
      // else {
      //   toast.error(res?.message);
      // }
    }
  });

  const showPassword = () => {
    setShow(!show)
  }
  const showConfirmPassword = () => {
    setConfirmShow(!confirmShow)
  }
  return (
    <>

      <div className="popup-overlay py-2">
        <div className="popup-content  setcontent-height">
          <div className="popup-logo pb-3">
            <div>
              <img src={Loginimg} className="img-fluid" alt="logo"></img>
            </div>
            <div>
              <button
                onClick={() => props?.setSignUp(false)}
                className="close-popup"
              >
                {" "}
                <i class="fa-solid fa-xmark"></i>{" "}
              </button>
            </div>
          </div>

          <div className="pop-section">
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className="row align-items-center justify-content-center">
                  {/* <div className="login-from">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="fname"
                      value={formik.values.fname}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />

                    <div className="icon">
                      <i class="fa-solid fa-user"></i>
                    </div>
                  </div> */}
                  <div className="input-box mb-4 position-relative">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="fname"
                      value={formik.values.fname}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className={`w-100 py-2 ps-4 rounded-pill transition ${formik.touched.fname && formik.errors.fname
                        ? "error-border"
                        : ""
                        }`}
                    />
                    <span className="pass-btn pass-btn rounded-pill pe-3 d-flex align-items-center">
                      <i class="fa-solid fa-user"></i>
                    </span>
                    {formik.touched.fname && formik.errors.fname && (
                      <span className="error danger">
                        {formik.errors.fname}
                      </span>
                    )}
                  </div>

                  {/* <div className="login-from set-top">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="lname"
                      value={formik.values.lname}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    <div className="icon">
                      <i class="fa-solid fa-user"></i>
                    </div>
                  </div> */}
                  <div className="input-box mb-4 position-relative">
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lname"
                      value={formik.values.lname}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className={`w-100 py-2 ps-4 rounded-pill transition ${formik.touched.lname && formik.errors.lname
                        ? "error-border"
                        : ""
                        }`}
                    />
                    <span className="pass-btn pass-btn rounded-pill pe-3 d-flex align-items-center">
                      <i class="fa-solid fa-user"></i>
                    </span>
                    {formik.touched.lname && formik.errors.lname && (
                      <span className="error danger">
                        {formik.errors.lname}
                      </span>
                    )}
                  </div>

                  {/* <div className="login-from set-top">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      name="email"
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    <div className="icon">
                      <i class="fa-solid fa-envelope"></i>
                    </div>
                  </div> */}
                  <div className="input-box mb-4 position-relative">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className={`w-100 py-2 ps-4 rounded-pill transition ${formik.touched.email && formik.errors.email
                        ? "error-border"
                        : ""
                        }`}
                    />
                    <span className="pass-btn pass-btn rounded-pill pe-3 d-flex align-items-center">
                      <i class="fa-solid fa-envelope"></i>
                    </span>
                    {formik.touched.email && formik.errors.email && (
                      <span className="error danger">
                        {formik.errors.email}
                      </span>
                    )}
                  </div>

                  {/* <div className="login-from set-top">
                    <input
                      type={show ? "password" : "text"}
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    <div className="icon">
                      {show ? (
                        <i
                          onClick={() => showPassword()}
                          class="fa-solid fa-eye-slash"
                        ></i>
                      ) : (
                        <i
                          onClick={() => showPassword()}
                          class="fa-solid fa-eye"
                        ></i>
                      )}
                    </div>
                  </div> */}
                  <div className="input-box mb-4 position-relative">
                    <input
                      type={show ? "password" : "text"}
                      placeholder="Password"
                      name="password"
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className={`w-100 py-2 ps-4 rounded-pill transition ${formik.touched.password && formik.errors.password
                        ? "error-border"
                        : ""
                        }`}
                    />
                    <span className="pass-btn pass-btn rounded-pill pe-3 d-flex align-items-center">
                      {show ? (
                        <i
                          onClick={() => showPassword()}
                          class="fa-solid fa-eye-slash"
                        ></i>
                      ) : (
                        <i
                          onClick={() => showPassword()}
                          class="fa-solid fa-eye"
                        ></i>
                      )}
                    </span>
                    {formik.touched.password && formik.errors.password && (
                      <span className="error danger">
                        {formik.errors.password}
                      </span>
                    )}
                  </div>

                  {/* <div className="login-from set-top">
                    <input
                      type={confirmShow ? "password" : "text"}
                      className="form-control"
                      placeholder="Confirm Password"
                      name="confirmPass"
                      value={formik.values.confirmPass}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    <div className="icon">
                      {confirmShow ? (
                        <i
                          onClick={() => showConfirmPassword()}
                          class="fa-solid fa-eye-slash"
                        ></i>
                      ) : (
                        <i
                          onClick={() => showConfirmPassword()}
                          class="fa-solid fa-eye"
                        ></i>
                      )}
                    </div>
                  </div> */}
                  <div className="input-box mb-4 position-relative">
                    <input
                      type={confirmShow ? "password" : "text"}
                      placeholder="Confirm Password"
                      name="confirmPass"
                      value={formik.values.confirmPass}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className={`w-100 py-2 ps-4 rounded-pill transition ${formik.touched.confirmPass && formik.errors.confirmPass
                        ? "error-border"
                        : ""
                        }`}
                    />
                    <span className="pass-btn pass-btn rounded-pill pe-3 d-flex align-items-center">
                      {confirmShow ? (
                        <i
                          onClick={() => showConfirmPassword()}
                          class="fa-solid fa-eye-slash"
                        ></i>
                      ) : (
                        <i
                          onClick={() => showConfirmPassword()}
                          class="fa-solid fa-eye"
                        ></i>
                      )}
                    </span>
                    {formik.touched.confirmPass &&
                      formik.errors.confirmPass && (
                        <span className="error danger">
                          {formik.errors.confirmPass}
                        </span>
                      )}
                  </div>

                  <div className="button-section">
                    <button
                      disabled={formik.isSubmitting}
                      type="submit"
                      className="loginbtn form-control"
                      size="lg"
                    >
                      Sign Up
                    </button>
                  </div>
                  {/* social-link */}
                  <div className="social-section">
                    <div className="d-flex justify-content-center align-items-center gap-4">
                      <button className="soical-icon py-2 bg-transparent border rounded-pill">
                        <img
                          src={Google}
                          className="img-fluid"
                          alt="Google"
                        ></img>
                        <p className="d-none d-sm-block">Google</p>
                      </button>
                      <button className="soical-icon py-2 bg-transparent border rounded-pill">
                        <img
                          src={Facebook}
                          className="img-fluid"
                          alt="facebook"
                        ></img>
                        <p className="d-none d-sm-block">Facebook</p>
                      </button>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="an-detail">
                      Already have an account?{" "}
                      <a
                        onClick={moveToLogin}
                        className="account-detail"
                        href="#"
                      >
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
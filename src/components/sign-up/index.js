// import Popimg from '../../assets/images/pop-img.png';
import React, { useState } from "react";
import './style.css';
import '../../App.css';
import Loginimg from "../../assets/image/loginlogo.png";
import Google from '../../assets/image/google.png';
import Insta from '../../assets/image/insta.png';
import * as Yup from "yup";
import { useFormik } from "formik";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { userSignUp } from "../../redux/services/AuthService";
const Popups = (props) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(true)
  const [confirmShow, setConfirmShow] = useState(true)
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState(0);
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
      const body = {
        first_name: formik?.values?.fname,
        last_name: formik?.values?.lname,
        email_id: formik?.values?.email,
        password: formik?.values?.password,
        confirm_password: formik?.values?.confirmPass
      }
      const res = await dispatch(userSignUp(body))
      if (res?.status == 200 || res?.success == true) {
        setShowAlert(true)
        setAlertType(1)
        setAlertMessage(res?.message)
        props?.setShow(false)
      }
      else {
        setShowAlert(true)
        setAlertType(0)
        setAlertMessage(res?.message)
      }
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
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showAlert}
        autoHideDuration={3000}
        onClose={() => setShowAlert(false)}
      >
        <Alert severity={alertType == 0 ? "error" : "success"}>
          {alertMessage}
        </Alert>
      </Snackbar>
      <div className="popup-overlay">
        <div className="popup-content">
          <div className='popup-logo pb-2'>
            <div>
              <img src={Loginimg} className="img-fluid" alt="logo">
              </img>
            </div>
            <div>
              <button onClick={() => props?.setShow(false)} className='close-popup' > <i class="fa-solid fa-xmark"></i>  </button>
            </div>
          </div>

          <div className='pop-section'>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className="row align-items-center justify-content-center">
                  <div className="login-from">
                    <input type="text" className="form-control" placeholder="First Name" name="fname"
                      value={formik.values.fname}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />

                    <div className="icon">
                      <i class="fa-solid fa-user"></i>
                    </div>
                  </div>
                  {formik.touched.fname && formik.errors.fname && (
                    <span className="error danger">{formik.errors.fname}</span>
                  )}
                  <div className="login-from set-top">
                    <input type="text" className="form-control" placeholder="Last Name" name="lname"
                      value={formik.values.lname}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange} />
                    <div className="icon">
                      <i class="fa-solid fa-user"></i>
                    </div>
                  </div>
                  {formik.touched.lname && formik.errors.lname && (
                    <span className="error danger">{formik.errors.lname}</span>
                  )}
                  <div className="login-from set-top">
                    <input type="email" className="form-control" placeholder="Email Address" name="email"
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange} />
                    <div className="icon">
                      <i class="fa-solid fa-envelope"></i>
                    </div>
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <span className="error danger">{formik.errors.email}</span>
                  )}
                  <div className="login-from set-top">
                    <input type={show ? "password" : "text"} className="form-control" placeholder="Password" name="password"
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange} />
                    <div className="icon">
                      {show ? <i onClick={() => showPassword()} class="fa-solid fa-eye-slash"></i> : <i onClick={() => showPassword()} class="fa-solid fa-eye"></i>}
                    </div>
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <span className="error danger">{formik.errors.password}</span>
                  )}
                  <div className="login-from set-top">
                    <input type={confirmShow ? "password" : "text"} className="form-control" placeholder="Confirm Password" name="confirmPass"
                      value={formik.values.confirmPass}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange} />
                    <div className="icon">
                      {confirmShow ? <i onClick={() => showConfirmPassword()} class="fa-solid fa-eye-slash"></i> : <i onClick={() => showConfirmPassword()} class="fa-solid fa-eye"></i>}

                    </div>

                  </div>
                  {formik.touched.confirmPass && formik.errors.confirmPass && (
                    <span className="error danger">{formik.errors.confirmPass}</span>
                  )}

                  <div className="button-section">
                    <button disabled={formik.isSubmitting} type="submit" className="loginbtn form-control" size="lg" >
                      Sign Up
                    </button>
                  </div>
                  {/* social-link */}
                  <div className="social-section">
                    <ul >
                      <li>
                        <div className="soical-icon icon-set">
                          <img src={Google} className="img-fluid" alt="Google">
                          </img>
                          <p>
                            Google
                          </p>
                        </div>

                      </li>
                      <li>
                        <div className="soical-icon icon-set">
                          <img src={Insta} className="img-fluid" alt="insta">
                          </img>
                          <p>
                            Instagram
                          </p>
                        </div>

                      </li>

                    </ul>
                  </div>

                  <div className="text-center">
                    <p className="an-detail">
                      Already have an account? <a className="account-detail" href="#">Register </a>
                    </p>

                  </div>

                </div>

              </form>

            </div>
          </div>
        </div>
      </div></>


  );
};
export default Popups;
// import Popimg from '../../assets/images/pop-img.png';
import React, { useState } from "react";
import "./style.css";
import "../../App.css";
import Loginimg from "../../assets/image/loginlogo.png";
import Google from "../../assets/image/google.png";
import Facebook from "../../assets/image/facebook.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/services/AuthService";
 
const Login = (props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState(0);
  const isLoading = useSelector((state) => state.authReducer.isLoading);
  const moveToSignUp = () => {
    props?.setLogin(false);
    props?.setSignUp(true);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
    }),
    onSubmit: async () => {
      const body = {
        email_id: formik?.values?.email,
        password: formik?.values?.password,
      };

      const res = await dispatch(userLogin(body));
      if (res?.status == 200 || res?.success == true) {
        setShowAlert(true);
        setAlertType(1);
        setAlertMessage(res?.message);
        props?.setLogin(false);
        
        
      } else {
        setShowAlert(true);
        setAlertType(0);
        setAlertMessage(res?.message);
      }
    },
    
  });
  const showPassword = () => {
    setShow(!show);
  };
     
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
          <div className="popup-logo pb-3">
            <div>
              <img src={Loginimg} className="img-fluid" alt="logo"></img>
            </div>
            <div>
              <button
                onClick={() => props?.setLogin(false)}
                className="close-popup"
              >
                {" "}
                <i class="fa-solid fa-xmark"></i>{" "}
              </button>
            </div>
          </div>

          <div className="pop-section">
            {/* <div>
                      <img src={Popimg} className='img-fluid' alt='pop'></img>
                    </div> */}
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className="row align-items-center justify-content-center">
                  <div className="login-from">
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
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <span className="error danger">{formik.errors.email}</span>
                  )}
                  <div className="login-from set-top">
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
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <span className="error danger">
                      {formik.errors.password}
                    </span>
                  )}
                  <div className="button-section">
                    <button
                      disabled={formik.isSubmitting}
                      type="submit"
                      className="loginbtn form-control d-flex align-items-center justify-content-center shadow-none"
                      size="lg"
                    >
                      {isLoading ? (
                        <div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        "Login"
                      )}
                    </button>

                    <div>
                      <p className="forget">
                        <a href="#" className="forget-detail">
                          Forgot Password 
                        </a>
                      </p>
                    </div>
                  </div>
                  {/* social-link */}
                  <div className="social-section">
                    <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4">
                      <button className="soical-icon py-2 rounded-pill">
                        <img
                          src={Google}
                          className="img-fluid"
                          alt="Google"
                        ></img>
                        <p>Google</p>
                      </button>
                      <button className="soical-icon py-2 rounded-pill">
                        <img
                          src={Facebook}
                          className="img-fluid"
                          alt="facebook"
                        ></img>
                        <p>Facebook</p>
                      </button>
                    </div>
                  </div>
                  {/* end */}
                  <div className="text-center">
                    <p className="an-detail">
                      Don’t have an account?{" "}
                      <a
                        onClick={moveToSignUp}
                        className="account-detail"
                        href="#"
                      >
                        Register{" "}
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
export default Login;

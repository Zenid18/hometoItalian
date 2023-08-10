import React from "react";
import "./style.css";
import Loginimg from "../../../assets/image/loginlogo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../../redux/services/AuthService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Forgot = ({ setForgot, setOtp }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required("Email is required"),
        }),
        onSubmit: async () => {
            const body = {
                email_id: formik?.values?.email,
            };
            // console.log(body);
            // const res = await dispatch(forgotPassword(body));
            // if (res?.status == 200 || res?.success == true) {
            //     toast.success(res?.message);
                setForgot(false)
                setOtp(true)
                // navigate('/otp', { state: formik?.values?.email });
            // } else {
            //     toast.error(res?.message);
            // }
            // formik.setSubmitting(false);
        },
    });
    const showOtp = () => {

    }
    return (

        <>
            <div className="popup-overlay">
                <div className="popup-content">
                    <div className="popup-logo pb-3">
                        <div className="text-center">
                            <img src={Loginimg} className="img-fluid" alt="logo"></img>
                        </div>
                        <div>
                            <button
                                onClick={() => setForgot(false)}
                                className="close-popup"
                            >
                                <i class="fa-solid fa-xmark"></i>{" "}
                            </button>
                        </div>
                    </div>

                    <div className="pop-section">
                        <div>
                            <div class="login-inner">
                                <h2 class="fw-600 text-center pb-4">Forgot Password</h2>
                                <form onSubmit={formik.handleSubmit}>

                                    <div class="mb-4">
                                        <div class="input-box mb-4 position-relative">
                                            <input type="email" placeholder="Email Address" onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                                name="email"
                                                className={`w-100 py-2 ps-4 rounded-pill transition ${formik.touched.email && formik.errors.email
                                                    ? "error-border"
                                                    : ""
                                                    }`} />
                                            <span class="pass-btn pass-btn rounded-pill pe-3 d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 25 21" fill="var(--d-grey)">
                                                    <path d="M22.5 20.5791H2.5C1.83696 20.5791 1.20107 20.3157 0.732233 19.8469C0.263392 19.378 0 18.7421 0 18.0791V2.97035C0.0280408 2.32634 0.303761 1.71805 0.769598 1.27248C1.23543 0.826905 1.85538 0.578493 2.5 0.579103H22.5C23.163 0.579103 23.7989 0.842495 24.2678 1.31134C24.7366 1.78018 25 2.41606 25 3.0791V18.0791C25 18.7421 24.7366 19.378 24.2678 19.8469C23.7989 20.3157 23.163 20.5791 22.5 20.5791ZM2.5 5.4141V18.0791H22.5V5.4141L12.5 12.0791L2.5 5.4141ZM3.5 3.0791L12.5 9.0791L21.5 3.0791H3.5Z">
                                                    </path></svg></span>
                                        </div>
                                    </div>
                                    <button disabled={formik.isSubmitting} type="submit" class="loginbtn form-control d-flex align-items-center justify-content-center shadow-none">Send OTP</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
export default Forgot;
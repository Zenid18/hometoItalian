import React from "react";
// import "./style.css";
import Loginimg from "../../../assets/image/loginlogo.png";
const ResetPassword = ({ setReset, setLogin }) => {
    const showLogin = () => {
        setReset(false)
        setLogin(true)
    }
    return (

        <>
            <div className="popup-overlay">
                <div className="popup-content">
                    <div className="popup-logo pb-3">
                        <div>
                            <img src={Loginimg} className="img-fluid" alt="logo"></img>
                        </div>
                        <h1> Reset password</h1>
                        <div>
                            <button
                                onClick={() => setReset(false)}
                                className="close-popup"
                            >
                                <i class="fa-solid fa-xmark"></i>{" "}
                            </button>
                        </div>
                    </div>

                    <div className="pop-section">
                        <div>
                            <div class="login-inner-box rounded-4 p-4 py-5 mx-3 p-sm-5">
                                <h2 class="fw-600 text-center pb-4">Forgot Password</h2>
                                <form>
                                    <div class="mb-4">
                                        <div class="input-box mb-4 position-relative">
                                            <input type="email" placeholder="Email Address" name="email" class="w-100 py-2 ps-4 rounded-pill transition " value="" />

                                        </div>
                                    </div>
                                    <button onClick={() => { showLogin() }} type="submit" class="login-btn white-text fw-600 w-100  rounded-pill mt-2 border-0">
                                        Send OTP</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
export default ResetPassword;
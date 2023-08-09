import React from "react";
// import "./style.css";
import Loginimg from "../../../assets/image/loginlogo.png";
import Verifyimg from "../../../assets/image/svg/verify.svg";
const Verify = ({ setVerify, setReset }) => {
    const showReset = () => {
        setVerify(false)
        setReset(true)
    }
    return (

        <>
            <div className="popup-overlay">
                <div className="popup-content">
                    <div className="popup-logo pb-3">
                        <div>
                            <img src={Loginimg} className="img-fluid" alt="logo"></img>
                        </div>

                        <div>
                            <button
                                onClick={() => setVerify(false)}
                                className="close-popup"
                            >
                                <i class="fa-solid fa-xmark"></i>{" "}
                            </button>
                        </div>
                    </div>

                    <div className="pop-section">
                        <div>
                            <div className="login-section ">
                                <div className="login-box  mt-2">

                                    {/* INNER-BOX */}
                                    <div className="login-inner text-center">
                                        <h2 className="fw-600 pb-2 ">Successfully Verified</h2>
                                        <p className="verified-para">
                                            You have successfully verified account.
                                        </p>
                                        <img
                                            className="img-fluid"
                                            width={110}
                                            src={Verifyimg}
                                            alt="verified"
                                        />
                                        <button type="submit" class="loginbtn form-control d-flex align-items-center justify-content-center shadow-none">Reset Password</button>
                                        <button

                                            type="submit"
                                            className="login-btn white-text fw-600 w-100  rounded-pill mt-2 border-0"
                                        >

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
export default Verify;
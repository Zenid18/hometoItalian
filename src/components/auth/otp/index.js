import React, { useState } from "react";
import "./style.css";
import OtpInput from 'react-otp-input';
// import OTPInput, { ResendOTP } from  "otp-input-react";
import { Link } from "react-router-dom";
const Otp = ({ setOtp, setVerify }) => {
    const [otp1, setOtp1] = useState('');
    const handleShow = () => {
        setOtp(false)
        setVerify(true)
    }




    return (
        <div className="popup-overlay">

            <div className="popup-content">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12 text-center">
                        <div>
                            <h2 class="fw-600 text-center">OTP Verification</h2>
                            <p className="email-detail">
                                Type the email verification code we’ve sent you
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="text-center">
                            <p class="fw-600 text-center time-detail">00:00</p>

                        </div>
                        <div className="text-center">
                            <div className="otp-container">

                                <div className="otp-input-wrapper">
                                    <OtpInput
                                        value={otp1}
                                        onChange={setOtp1}
                                        numInputs={4}
                                        containerStyle="justify-content-center otp-box"
                                        inputType="tel"
                                        shouldAutoFocus
                                        renderSeparator={<span>-</span>}
                                        renderInput={(props) => <input {...props} />}
                                    />
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="">
                        <div className="col-lg-12 text-center">
                            <button type="submit" onClick={() => handleShow()} class="loginbtn form-control d-flex align-items-center justify-content-center shadow-none"> verify</button>

                        </div>
                    </div>
                    <div className="col-lg-12 text-center">
                        <div className="text-center">
                            <p class="text-center my-3 text-body-tertiary">or</p>
                        </div>
                    </div>
                    <div className="col-lg-12 text-center">
                        <div>
                            <div class="send-btn text-center"><button class="border-0 bg-transparent fw-600 ">Send again</button></div>
                        </div>

                    </div>


                </div>







            </div>
        </div>
    )
};

export default Otp;
import React, { useEffect, useState } from "react";
import "./style.css";
import OtpInput from 'react-otp-input';
// import OTPInput, { ResendOTP } from  "otp-input-react";
import { Link } from "react-router-dom";
import { OtpVerify, forgotPassword } from "../../../redux/services/AuthService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
const Otp = ({ setOtp, setVerify, email, setEmail }) => {
    const dispatch = useDispatch()
    const [otp1, setOtp1] = useState('');
    const [timer, setTimer] = useState(60)
    const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            }
            else {
                setIsSendButtonDisabled(true)
            }

        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    const handleSendAgain = async () => {
        const body = {
            email_id: email,
        }
        const res = await dispatch(forgotPassword(body))
        if (res?.status == 200 || res?.success == true) {
            toast?.success(res?.message)
            setTimer(60);
            setIsSendButtonDisabled(false);
        }
        else {
            toast?.error(res?.message)
        }

    };

    const handleOtp = async (event) => {
        event?.preventDefault()
        if (!otp1) {
            toast?.error("Otp is required")
        }
        else {
            const body = {
                email_id: email,
                otp: otp1
            }
            const res = await dispatch(OtpVerify(body));
            console.log(res, '????')
            if (res?.status == 200 || res?.success == true) {
                toast.success(res?.message);
                setOtp(false)
                setVerify(true)
                setEmail(email)
            } else {
                toast.error(res?.message);
            }
        }

    }

    return (
        <div className="popup-overlay">

            <div className="popup-content">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12 text-center">
                        <div>
                            <h2 class="fw-600 text-center pb-2">OTP Verification</h2>
                            <p className="email-detail">
                                Type the email verification code we’ve sent you
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="text-center">
                            <p class="fw-600 text-center py-2 time-detail">{Math.floor(timer / 60).toString().padStart(2, "0")}:
                                {(timer % 60).toString().padStart(2, "0")}</p>

                        </div>
                        <div className="text-center">
                            <div className="otp-container">

                                <div className="otp-input-wrapper">
                                    <OtpInput
                                        value={otp1}
                                        onChange={setOtp1}
                                        numInputs={4}
                                        containerStyle="justify-content-center otp-box pb-3"
                                        inputType="tel"
                                        shouldAutoFocus
                                        renderSeparator={<span>-</span>}
                                        renderInput={(props) => <input {...props} />}
                                    />
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="pt-4">
                        <div className="col-lg-12 text-center">
                            <button type="button"
                                onClick={() => handleOtp()} class="loginbtn form-control d-flex align-items-center justify-content-center shadow-none"> verify
                            </button>

                        </div>
                    </div>
                    <div className="col-lg-12 text-center pt-2 pt-md-3 pt-lg-2">
                        <div className="text-center">
                            {isSendButtonDisabled ? <p className="text-center my-3 text-body-tertiary">or</p> : ""}
                        </div>
                    </div>
                    <div className="col-lg-12 text-center">
                        <div>
                            {isSendButtonDisabled ?
                                <div className="send-btn text-center">
                                    <button className="border-0 bg-transparent fw-600"
                                        onClick={handleSendAgain} >
                                        Send again
                                    </button>
                                </div>
                                : ""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Otp;
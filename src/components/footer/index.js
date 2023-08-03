import React, { useState } from "react";
import "../../App.css";
import "./style.css";
import Logo from "../../assets/image/logo.png";
import Popupes from "../pricingplans";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const nevigate = useNavigate();
  const [show, setShow] = useState(false);
  const [subEmail, setSubEmail] = useState("");
  const [subRequired, setSubRequired] = useState(false);

  const handleInputChange = (event) => {
    setSubEmail(event.target.value);
    setSubRequired(false);
  };

  const handleSubscribe = (event) => {
    event.preventDefault(); // Prevent form submission

    if (subEmail.trim() === "") {
      setSubRequired(true);
    } else {
      // Your subscription logic here
      setShow(false);
    }
  };
  return (
    <section className="footer-bg">
      <footer>
        <div className="container">
          <div className="row align-items-center justify-content-center logo-top">
            <div className="col-lg-6">
              <div className="text-center">
                <a onClick={() => nevigate("/")} href="">
                  <img src={Logo} className="img-fluid" alt="logo"></img>
                </a>
              </div>
            </div>
            <div className="row align-items-center justify-content-center news-top-padding">
              <div className="col-lg-6 col-md-7 col-10">
                <div className="text-center">
                  <h3 className="sub-details">
                    Subscribe to get our Newsletter
                  </h3>
                </div>
                <div className="text-center">
                  <form className="Subscribe-section">
                    <input
                      type="email"
                      className="form-control newletter mb-2 mb-sm-0"
                      placeholder="Your Email"
                      value={subEmail}
                      onChange={handleInputChange}
                      required
                    />

                    <button
                      type="submit"
                      className="custome-subcribe"
                      onClick={handleSubscribe}
                    >
                      Subscribe
                    </button>
                  </form>
                  {subRequired ? (
                    <p className="text-danger text-start ps-3 subRequired">
                      Email is Required
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center  news-top-padding">
              <div className="col-lg-12">
                <div className="footer-section">
                  <ul>
                    <li>
                      <p className="pointer">Our Plans</p>
                    </li>
                    <li>
                      <p className="pointer">Book a Timeslot</p>
                    </li>
                    <li>
                      <p className="pointer">Privacy Policy</p>
                    </li>
                    <li>
                      <p className="pointer">Terms & Conditions</p>
                    </li>
                  </ul>
                </div>
                <div className="footer-section sm-screen">
                  <ul>
                    <li>
                      <p>Our Plans</p>
                    </li>
                    <li>
                      <p>Book a Timeslot</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>Privacy Policy</p>
                    </li>
                    <li>
                      <p>Terms & Conditions</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="copyright-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="last-footer-section">
                <p>© 2021 Auri Studio AB.</p>
              </div>
            </div>
          </div>
          {show ? <Popupes show={show} setShow={setShow} /> : ""}
        </div>
      </section>
    </section>
  );
};
export default Footer;

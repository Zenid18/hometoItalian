import React from "react";
import "./style.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Paypal from "../../assets/image/paypal.png";
import KingIcon from "../../assets/image/king-icon.png";

const DescriptionPayment = () => {
  return (
    <>
      <Header />
      <div className="description-payment section-padding ">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-4 px-4 mb-4 mb-lg-0">
              <div className="type-of-payment">
                <h2 className="description-paymen-heading">Type of payment</h2>
                <div className="description-payment-box p-3 rounded-3">
                  <p className="description-payment-para">
                    We'll use this information to issue the first invoice.
                    You'll be able to update the details for future invoices
                    from your account profile.
                  </p>
                  <form className="type-of-payment-form" action="">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div class="mb-3">
                          <label for="countryFrom" class="form-label">
                            Country
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="countryFrom"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div class="mb-3">
                          <label for="zipcodeFrom" class="form-label">
                            Zip code
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="zipcodeFrom"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div class="mb-3">
                          <label for="stateFrom" class="form-label">
                            State/Region
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="stateFrom"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div class="mb-3">
                          <label for="cityFrom" class="form-label">
                            City
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="cityFrom"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div class="mb-3">
                          <label for="billingFrom" class="form-label">
                            Billing address
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="billingFrom"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div class="mb-3">
                          <label for="firstNameFrom" class="form-label">
                            First name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="firstNameFrom"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div class="mb-3">
                          <label for="lastNameFrom" class="form-label">
                            Last name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="lastNameFrom"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div class="mb-3">
                          <label for="emailFrom" class="form-label">
                            Billing email
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="emailFrom"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 px-4 mb-4 mb-lg-0">
              <div className="payment-method">
                <h2 className="description-paymen-heading">Payment method</h2>
                <div className="description-payment-box p-3 rounded-3">
                  <div className="check-box border">
                    <div class="form-check border-bottom">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="payment-method"
                        id="creditcard-box"
                      />
                      <label
                        class="form-check-label w-100 credit-card-label"
                        for="creditcard-box"
                      >
                        Credit/Debit Card
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="payment-method"
                        id="paypal-box"
                      />
                      <label class="form-check-label w-100" for="paypal-box">
                        <img
                          className="papal-img"
                          src={Paypal}
                          alt="papal-img"
                        />
                      </label>
                    </div>
                  </div>
                  <p className="description-payment-para pt-4">
                    We use 128-bit SSL encryption for payments to ensure the
                    transaction is secure.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 px-4 mb-4 mb-lg-0">
              <div className="order-details">
                <h2 className="description-paymen-heading">Order details</h2>
                <div className="description-payment-box rounded-3">
                  <div className="px-3 pt-3">
                    <p>Your subscription</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center px-3">
                    <p>
                      <img className="me-2" src={KingIcon} alt="king-img" />{" "}
                      Monthly Plan
                    </p>
                    <p>2500.22</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center px-3 pb-2">
                    <p>VAT/GST/Sales taxes(18%)</p>
                    <p>3500.12</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-top px-3 pt-2">
                    <p>Total </p>
                    <p>6000.12</p>
                  </div>
                </div>
                <button className="w-100 rounded-pill border-0 py-2 mt-4 payment-submit-btn">
                  Done
                </button>
                <p className="pt-4">
                  <span> Your subscription</span> will renew automatically every
                  month as one payment of 10266.00 . You may cancel your
                  subscription anytime from My subscription section in your
                  profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default DescriptionPayment;

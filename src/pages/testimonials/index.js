import React from 'react';
import './style.css';
import '../../App.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from 'react-bootstrap/Button';  
import Lineb from "../../assets/image/line-b.png";
import Test from "../../assets/image/test-a.png";
import Testb from "../../assets/image/test-b.png";
import Testc from "../../assets/image/test-c.png";
import Testd from "../../assets/image/test-d.png";
import Teste from "../../assets/image/test-e.png";
import Testf from "../../assets/image/test-f.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Testimontial = () => {
    return (
      <section>
        <Header />

        <section className="main-section section-padding">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6">
                <div className="main-test">
                  <div>
                    <img src={Lineb} className="img-fluid" alt="Line" />
                  </div>
                  <div>
                    <p class="test-detail">TESTIMONIAL</p>
                  </div>
                  <div>
                    <img src={Lineb} className="img-fluid" alt="Line" />
                  </div>
                </div>
              </div>
            </div>

            <section className="text-margin">
              <div className="row align-items-center justify-content-center row-revers">
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="main-exactly-section">
                    <div className="exactly-section">
                      <div>
                        <p className="exactly-detail">
                          "Thank you so much for your help. It's exactly what
                          I've been looking for. You won't regret it. It really
                          saves me time and effort. Skilline is exactly what our
                          business has been lacking."
                        </p>
                      </div>
                      <div className="exactly-list">
                        <ul>
                          <li>
                            <h5 className="name-detail"> Gloria Rose</h5>
                          </li>
                          <li>
                            <p>12 reviews at Yelp</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-12">
                  <div className="monial-img">
                    <img src={Test} className="img-fluid" alt="text" />
                  </div>
                </div>
              </div>
            </section>
            <section className="text-margin">
              <div className="row align-items-center justify-content-around">
                <div className="col-lg-4 col-md-5 col-12" data-aos="fade-right">
                  <div className="monial-img">
                    <img src={Testb} className="img-fluid" alt="text" />
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-12">
                  <div className="main-exactly-section">
                    <div className="exactly-sections">
                      <div>
                        <p className="exactly-detail">
                          "Thank you so much for your help. It's exactly what
                          I've been looking for. You won't regret it. It really
                          saves me time and effort. Skilline is exactly what our
                          business has been lacking."
                        </p>
                      </div>
                      <div className="exactly-list">
                        <ul>
                          <li>
                            <h5 className="name-detail"> Gloria Rose</h5>
                          </li>
                          <li>
                            <p>12 reviews at Yelp</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-margin">
              <div className="row align-items-center justify-content-center row-revers">
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="main-exactly-section">
                    <div className="exactly-section">
                      <div>
                        <p className="exactly-detail">
                          "Thank you so much for your help. It's exactly what
                          I've been looking for. You won't regret it. It really
                          saves me time and effort. Skilline is exactly what our
                          business has been lacking."
                        </p>
                      </div>
                      <div className="exactly-list">
                        <ul>
                          <li>
                            <h5 className="name-detail"> Gloria Rose</h5>
                          </li>
                          <li>
                            <p>12 reviews at Yelp</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-12">
                  <div className="monial-img">
                    <img src={Testc} className="img-fluid" alt="text" />
                  </div>
                </div>
              </div>
            </section>
            <section className="text-margin">
              <div className="row align-items-center justify-content-around">
                <div className="col-lg-4 col-md-5 col-12">
                  <div className="monial-img">
                    <img src={Testd} className="img-fluid" alt="text" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="main-exactly-section">
                    <div className="exactly-sections">
                      <div>
                        <p className="exactly-detail">
                          "Thank you so much for your help. It's exactly what
                          I've been looking for. You won't regret it. It really
                          saves me time and effort. Skilline is exactly what our
                          business has been lacking."
                        </p>
                      </div>
                      <div className="exactly-list">
                        <ul>
                          <li>
                            <h5 className="name-detail"> Gloria Rose</h5>
                          </li>
                          <li>
                            <p>12 reviews at Yelp</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-margin">
              <div className="row align-items-center justify-content-center row-revers">
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="main-exactly-section">
                    <div className="exactly-section">
                      <div>
                        <p className="exactly-detail">
                          "Thank you so much for your help. It's exactly what
                          I've been looking for. You won't regret it. It really
                          saves me time and effort. Skilline is exactly what our
                          business has been lacking."
                        </p>
                      </div>
                      <div className="exactly-list">
                        <ul>
                          <li>
                            <h5 className="name-detail"> Gloria Rose</h5>
                          </li>
                          <li>
                            <p>12 reviews at Yelp</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-12">
                  <div className="monial-img">
                    <img src={Teste} className="img-fluid" alt="text" />
                  </div>
                </div>
              </div>
            </section>

            <section className="text-margin">
              <div className="row align-items-center justify-content-around">
                <div className="col-lg-4 col-md-5 col-12">
                  <div className="monial-img">
                    <img src={Testf} className="img-fluid" alt="text" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="main-exactly-section">
                    <div className="exactly-sections">
                      <div>
                        <p className="exactly-detail">
                          "Thank you so much for your help. It's exactly what
                          I've been looking for. You won't regret it. It really
                          saves me time and effort. Skilline is exactly what our
                          business has been lacking."
                        </p>
                      </div>
                      <div className="exactly-list">
                        <ul>
                          <li>
                            <h5 className="name-detail"> Gloria Rose</h5>
                          </li>
                          <li>
                            <p>12 reviews at Yelp</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="loader-section text-margin ">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6">
                  <div>
                    <p className="loader-detail">loader</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="text-margin">
              <div className="row align-item-center justify-content-center">
                <div className="col-lg-10">
                  <div className="form-bg">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-lg-10">
                        <div>
                          <h4 class="tried-detail">
                            {" "}
                            Have you tried one of our courses?
                          </h4>
                        </div>
                        <div>
                          <p className="form-detail">
                            Tell us what you think below!
                          </p>
                        </div>
                      </div>
                    </div>
                    <form>
                      <div className="row align-items-center justify-content-center">
                        <div className="col-lg-10">
                          <div className="form-selects">
                            <input
                              type="text "
                              placeholder="Name *"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center justify-content-center">
                        <div className="col-lg-10">
                          <div className="form-selects">
                            <input
                              type="email "
                              placeholder="Email "
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center justify-content-center">
                        <div className="col-lg-10 col-12">
                          <div className="form-selects">
                            <textarea
                              class="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              placeholder="Review *"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center justify-content-center">
                        <div className="col-lg-4 text-center">
                          <button type="submit" class="custome-subcribes">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <Footer />
      </section>
    );
};

export default Testimontial;
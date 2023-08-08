import React, { useEffect } from "react";
import "./style.css";
import "../../App.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Card from "../../components/card";
import Button from "react-bootstrap/Button";
import Caseimg from "../../assets/image/caesimg.png";
import Hedarimg from "../../assets/image/header-pic.png";
import Couresas from "../../assets/image/cur.png";
import Verfied from "../../assets/image/Verifiedteachers.png";
import lessons from "../../assets/image/Affordablelessons.png";
import flexibility from "../../assets/image/clock.png";
import Iqvq from "../../assets/image/iqvq.png";
import Iqva from "../../assets/image/ioa-a.png";
import Iqvb from "../../assets/image/iqv-b.png";
import Iqvc from "../../assets/image/iqv-c.png";
import Couresimg from "../../assets/image/courseimg.png";
import Couresa from "../../assets/image/coures-a.png";
import Coressb from "../../assets/image/crossgroup.png";
import Coressc from "../../assets/image/checkgroup.png";
import Timeslot from "../../assets/image/timeslot.png";
import Books from "../../assets/image/books.png";
import Star from "../../assets/image/Star.png";
import Resources from "../../assets/image/Resources.png";
import Resico from "../../assets/image/resourceimg.png";
import Say from "../../assets/image/say.png";
import Line from "../../assets/image/Line.png";
import { getData, storageKey } from "../../constants/storage";

import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const auth = getData(storageKey?.AUTH_TOKEN);
  const authLogin = () => {

    navigate("/tutors");
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Header />

      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center justify-contnet-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="Benvenuti-section">
                <h1 className="case-detail">Benvenuti a casa!</h1>
                <div class="roots-section">
                  <p className="reconnect-details">
                    We’ll help you reconnect with your Italian roots through an
                    all-rounded environment made of language learning, Italian
                    culture topics and the chance to meet a native Italian
                    teacher for a live class, or even just for asking a couple
                    of questions. Relax and enjoy coming back home, to Italian!
                    Your nonna will be proud.
                  </p>
                </div>

                <div className="explore-btns">
                  <Button
                    variant="secondary"
                    onClick={authLogin}
                    size="lg"
                    className="custome-iqvs exp-btn"
                    active
                  >
                    Explore Teachers
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="case-section">
                <div className="text-end case-img">
                  <img src={Caseimg} className="img-fluid" alt="Case"></img>
                </div>
                <div className="head-section">
                  <img src={Hedarimg} className="img-fluid" alt="hedar"></img>
                </div>
              </div>
            </div>
          </div>
          {/*home-section */}

          <section className="home-margin">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-8 col-md-10 col-11">
                <div>
                  <h2 className="home-details" data-aos="fade-right">
                    Why learn with <span>Home to Italian</span>
                  </h2>
                </div>
              </div>

              <div className="col-lg-7 col-md-9 col-12">
                <div class=" slide-in ">
                  <p className="skill-details ">
                    Skilline is one powerful online software suite that combines
                    all the tools needed to run a successful school or office.
                  </p>
                </div>
              </div>
            </div>
            <div className="verified-margin">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="verified-section card-container">
                    <div className="verified-img">
                      <img src={Verfied} className="img-fluid" alt="verified" />
                    </div>
                    <div className="main-detail-section">
                      <h3 className="verified-details">Verified teachers</h3>
                      <p className="community-details">
                        Our community has over 10,000 expert tutors – all with
                        prior teaching experience, vetted by our team.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="verified-section">
                    <div className="verified-img">
                      <img src={lessons} className="img-fluid" alt="verified" />
                    </div>
                    <div className="main-detail-section">
                      <h3 className="verified-details">Affordable lessons</h3>
                      <p className="community-details">
                        Schedule and reserve classrooms at one campus or
                        multiple campuses. Keep detailed records of student
                        attendance
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="verified-section" data-aos="fade-righ ">
                    <div className="verified-img">
                      <img
                        src={flexibility}
                        className="img-fluid"
                        alt="verified"
                      />
                    </div>
                    <div className="main-detail-section">
                      <h3 className="verified-details">
                        Convenience & flexibility
                      </h3>
                      <p className="community-details">
                        Automate and track emails to individuals or groups.
                        Skilline’s built-in system helps organize your
                        organization
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="find-margin">
            <div className="row  justify-content-center">
              <div className="col-lg-8 col-md-9 col-11">
                <div className="text-center">
                  <h2 className="home-details" data-aos="fade-left">
                    Here's what you'll find at <span>Home to Italian</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="iqa-section">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-mg-6 col-12">
                  <div>
                    <h4
                      className="iqv-details margin-bttom"
                      data-aos="fade-right"
                    >
                      Italiano Quando Vuoi <span>(IQV) </span>
                    </h4>
                  </div>
                  <div className="Quando-details">
                    <div className="program-section gap-5">
                      <div className="program-img set-a">
                        <img width={100} src={Iqva} className="img-fluid" alt="IQV" />
                      </div>
                      <div className="program-detail detail-a">
                        <p>
                          Start reconnecting to your Italian heritage with IQV's exclusive subscription program.
                          Our great short video lessons with accompanying exercises offer a convenient way to integrate language learning into your daily routine.
                        </p>
                      </div>
                    </div>

                    <div className="program-section gap-5">
                      <div className="program-img">
                        <img width={120} src={Iqvb} className="img-fluid" alt="IQV" />
                      </div>
                      <div className="program-detail detail-b">
                        <p>
                          Our concise and engaging video lessons ensure efficient learning and practice in all the language skills with a special attention to culture,
                          enabling you to make daily progress. Whether you're on your lunch break or during a commute, IQV will fit into your busy schedule, with tangible and trackable progress.
                        </p>
                      </div>
                    </div>

                    <div className="program-section section-set gap-5">
                      <div className="program-img set-b">
                        <img width={90} src={Iqvc} className="img-fluid" alt="IQV" />
                      </div>
                      <div className="program-detail detail-c">
                        <p>
                          But that's not all! We're committed to keeping our content fresh and dynamic. Every month, IQV is updated and enriched with new lessons,
                          ensuring you stay engaged and continuously expand your Italian proficiency.
                        </p>
                      </div>
                    </div>

                    <div className="explore-btn">
                      <Button
                        variant="secondary"
                        size="lg"
                        className="custome-iqvs"
                        active
                      >
                        Explore IQVs
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-mg-6 col-12">
                  <div className="iqc-img">
                    <img src={Iqvq} className="img-fluid" alt="iQv"></img>
                    {/* <div className='circle-a'>
                                    <img src={Circle}  className='img-fluid' alt='cricle'>  </img>
                                </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="find-margin">
            <div className="">
              <div className="row align-items-center justify-content-center row-revers">
                <div className="col-lg-6 col-mg-6 col-12">
                  <div className="Couresimg-section">
                    <div>
                      <img src={Couresimg} className="img-fluid" alt="iQv" />
                    </div>
                    {/* <div className='sec-couers'>
                             <img src={Couresas}  className='img-fluid' alt='cricle' /> 
                             </div> */}
                    <div className="circle-a">
                      <img src={Couresa} className="img-fluid" alt="cricle" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-mg-6 col-12">
                  <div>
                    <h4
                      className="iqv-details animation margin-bttom"
                      data-aos="fade-left"
                    >
                      Online <span>Courses </span>
                    </h4>
                  </div>
                  <div className="Quando-details">
                    <p className="courses-detail">
                      Learn about the Italian culture and language with confidence and at your own pace through our courses led by native Italian teachers, that have designed
                      them to cover different language levels and interests. Assess your progress with regular tests, connect with your teacher during office hours for personalized guidance, and earn a certificate of completion. Choose your first course today!
                    </p>
                    <div>
                      <Button
                        variant="secondary"
                        size="lg"
                        className="custome-iqvs"
                        active
                      >
                        Explore Courses
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="find-margin">
            <div className="">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-mg-6 col-12">
                  <div>
                    <h4 className="iqv-details" data-aos="fade-right">
                      <span>Book a timeslot:</span>
                    </h4>
                    <h4
                      className="iqv-details margin-bttom "
                      data-aos="fade-left"
                    >
                      Come whenever you want, we’re home!
                    </h4>
                  </div>
                  <div className="Quando-details">
                    <p className="courses-detail">
                      Whether you are studying by yourself with one of our courses and have a few questions, or you want to have a thorough discussion with a
                      teacher about a topic, book a slot during our available office hours! You can decide to talk with your teacher for 20, 30 or 45 minutes. We can as well plan a cycle of 1:1 or group lessons together.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-mg-6 col-12">
                  <div className="Couresimg-section">
                    <div>
                      <img src={Timeslot} className="img-fluid" alt="iQv" />
                      <div className="books-section">
                        <div className="book-img">
                          <img src={Books} className="img-fluid" alt="group" />
                        </div>
                      </div>
                      <div className="star-section">
                        <div className="star-img">
                          <img src={Star} className="img-fluid" alt="group" />
                        </div>
                      </div>
                    </div>
                    {/* <div className='circle-a'>
                                                            <img src={Couresa}  className='img-fluid' alt='cricle' />  
                                                        </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="find-margin">
            <div className="">
              <div className="row align-items-center justify-content-center row-revers">
                <div className="col-lg-6 col-mg-6 col-12">
                  <div className="Couresimg-section">
                    <div>
                      <img src={Resources} className="img-fluid" alt="iQv" />

                      <div className="star-section">
                        <div className="contact-img">
                          <img src={Resico} className="img-fluid" alt="group" />
                        </div>
                      </div>
                    </div>
                    {/* <div className='circle-a'>
                                                            <img src={Couresa}  className='img-fluid' alt='cricle' />  
                                                        </div> */}
                  </div>
                </div>
                <div className="col-lg-6 col-mg-6 col-12">
                  <div>
                    <h4
                      className="iqv-details animation margin-bttom"
                      data-aos="fade-right"
                    >
                      Resources
                    </h4>
                  </div>
                  <div className="Quando-details">
                    <p className="courses-detail">
                      A whole library of materials designed by our teachers with your learner’s profile in mind, that you can download to support your study.
                      You will find PDF’s, cheat-sheets, e-books and more about everything Italian.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="find-margin">
            <div className="">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-mg-6 col-12">
                  <div className="test-section">
                    <div>
                      <span className="span-d">
                        <img src={Line} className="img-fluid" alt="Line" />
                      </span>
                    </div>
                    <div>
                      <p className="test-detail" data-aos="fade-right">
                        TESTIMONIAL
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4
                      className="say-detail margin-bttom"
                      data-aos="fade-left"
                    >
                      What They Say?
                    </h4>
                  </div>
                  <div className="Quando-details">
                    <p className="courses-detail">
                      Read the testimonials from our students! Hear first hand how learning at Home to Italian has strengthened their connection to their Italian heritage
                      and transformed their language skills.


                    </p>
                    <p className="courses-detail">
                      Leave your testimonial here! We’d love to hear from you!
                    </p>

                  </div>
                  <div className="view-btn">
                    <button
                      type="submit"
                      onClick={() => navigate("/testimonials")}
                      className="custome-view"
                    >
                      View All <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 col-mg-6 col-12">
                  <div className="Couresimg-section set-coures">
                    <div>
                      <img src={Say} className="img-fluid" alt="iQv" />
                    </div>
                    <div className="help-section" data-aos="fade-up">
                      <p className="help-detail">
                        "Thank you so much for your help. It's exactly what I've
                        been looking for. You won't regret it. It really saves
                        me time and effort. Skilline is exactly what our
                        business has been lacking."
                      </p>
                      <div className="rose-section">
                        <ul>
                          <li>
                            <p>Gloria Rose</p>
                          </li>
                          <li>
                            <p>12 reviews at Yelp </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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

export default Home;

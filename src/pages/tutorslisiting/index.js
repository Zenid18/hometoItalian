import React, { useEffect, useState } from "react";
import "./style.css";
import "../../App.css";
import Like from "../../assets/image/like.png";
import Dropdown from "react-bootstrap/Dropdown";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Gsingerashim from "../../assets/image/GingerHashim.png";
import Gsingerashima from "../../assets/image/ga.png";
import Gsingerashimb from "../../assets/image/print.png";
import Gsingerashimc from "../../assets/image/gb.png";
import Gsingerashimd from "../../assets/image/gd.png";
import Gsingerashimes from "../../assets/image/ge.png";
import Slidera from "../../assets/image/Slidera.png";
import Sliderb from "../../assets/image/Sliderb.png";
import Sliderc from "../../assets/image/Sliderc.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTecherList } from "../../redux/services/otherServices/TeacherManagement";
import * as url from "../../constants/urls";
const Tutors = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [teacherData, setTeacherData] = useState([]);
  const [teacherShow, setTeacherShow] = useState(true);
  const isLoading = useSelector((state) => state.authReducer.isLoading);

    useEffect(() => {
      handleTeacherData();
    window.scrollTo(0, 0);
    }, []);

  const handleTeacherData = async () => {
    const res = await dispatch(getTecherList()); 
    if (res?.status == 200 || res?.success == true) {
      setTeacherData(res?.data);
      setTeacherShow(true);
    } else {
      setTeacherShow(false);
    }
  };
  
    const navigateTutors = (id) => {
      navigate("/description", { state: id });
    };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };


  return (
    <section>
      <Header />

      <section className="main-section section-padding tutors-box">
        <div className="container">
          <div>
            {/*teacher-section  */}
            <div className="container">
              <div className="row align-items-center justify-content-center set-top-padding">
                <div className="col-lg-6 p-0">
                  <div className="teacher-section">
                    <h4 className="teacher-detail">2550 Teachers</h4>
                  </div>
                </div>
                <div className="col-lg-6 p-0 text-end">
                  <div className="teacherdrop-section">
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Sort & Filters
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
            {/*teacher-section-end  */}

            {/* Ginger Hashim.. */}
            <div>
              <div className="row align-items-center hashim-padding">
                {teacherData?.map((val, i) => {
                  return (
                    <div className="col-lg-4 mb-5 col-md-6 col-12 px-4" key={i}>
                      <div
                        onClick={() => navigateTutors(val.teacher_id)}
                        className="hashim-setion teachers-box"
                      >
                        <div className="img-section">
                          <div className="overflow-hidden rounded-3">
                            <img
                              src={
                                val?.teacher_img
                                  ? url?.BASE_URL + val?.teacher_img
                                  : ""
                              }
                              className="img-fluid main-img"
                              alt="Ginger Hashim.."
                            />
                          </div>
                          <div className="like-section">
                            <img src={Like} className="img-fluid" alt="like" />
                          </div>
                        </div>

                        <div className="Gsinger-detail">
                          <h2>
                            {val.first_name}&nbsp;
                            {val.last_name}
                          </h2>
                          <p>{val.about}</p>
                          <div>
                            <h5>
                              {" "}
                              <span className="Speaks">Speaks</span>
                              {val.lang}
                            </h5>
                            <h5>
                              {" "}
                              <span className="Speaks">{val.location}</span>
                              5:29 AM (GMT-04:00)
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {isLoading ? (
                  <div class="spinner-border text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  ""
                )}
                {!teacherShow ? (
                  <div className="col-12 text-center">No Data Found</div>
                ) : (
                  ""
                )}
              </div>
            </div>

            {/* Ginger Hashim.. */}

            {/* button-section */}
            {teacherShow ? (
              <div className="conatiner">
                <div className="row align-items-center justify-contnet-center">
                  <div className="col-lg-12">
                    <div className="button-section">
                      <button className="more-btn" type="submit">
                        More Teachers
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {/* end */}

            {/* Trending courses */}
            <div className="container">
              <div className="row align-items-center justify-content-start set-top-padding">
                <div className="col-lg-6 p-0">
                  <div className="teacher-section">
                    <h4 className="teacher-detail">Trending courses</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* Trending courses */}

            {/* slider */}
            <div className="container p-0">
              <div className="row align-items-center justify-content-center slider-padding">
                <div className="col-lg-12">
                  <Slider {...settings}>
                    <div>
                      <div className="hashim-setions tutors-slider ">
                        <div className="img-section position-relative">
                          <img
                            src={Slidera}
                            className="img-fluid"
                            alt="Ginger Hashim.."
                          />
                          <div className="like-sections">
                            <img src={Like} className="img-fluid" alt="like" />
                          </div>
                        </div>

                        <div className="Gsinger-details">
                          <div className="hashim-detail">
                            <div>
                              <h2>Ginger Hashim..</h2>
                            </div>
                            <div>
                              <h6 className="pe-2">$80</h6>
                            </div>
                          </div>
                          <div className="but-section">
                            <div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisc
                                ingelit. Sed neque egestas sem.
                              </p>
                            </div>
                            <div>
                              <button type="submit" className="lorem-btn">
                                Buy
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="hashim-setions">
                        <div className="img-section">
                          <img
                            src={Sliderb}
                            className="img-fluid"
                            alt="Ginger Hashim.."
                          />
                          <div className="like-sections">
                            <img src={Like} className="img-fluid" alt="like" />
                          </div>
                        </div>

                        <div className="Gsinger-details">
                          <div className="hashim-detail">
                            <div>
                              <h2>Ginger Hashim..</h2>
                            </div>
                            {/* <div >
                        <h6>
                            $80
                        </h6>
                       </div> */}
                          </div>
                          <div className="but-section">
                            <div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisc
                                ingelit. Sed neque egestas sem.
                              </p>
                            </div>
                            {/* <div>
                                <button type='submit' className='lorem-btn'>
                                Buy
                                </button>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="hashim-setions">
                        <div className="img-section">
                          <img
                            src={Sliderc}
                            className="img-fluid"
                            alt="Ginger Hashim.."
                          />
                          <div className="like-sections">
                            <img src={Like} className="img-fluid" alt="like" />
                          </div>
                        </div>

                        <div className="Gsinger-details">
                          <div className="hashim-detail">
                            <div>
                              <h2>Ginger Hashim..</h2>
                            </div>
                            {/* <div >
                        <h6>
                            $80
                        </h6>
                       </div> */}
                          </div>
                          <div className="but-section">
                            <div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisc
                                ingelit. Sed neque egestas sem.
                              </p>
                            </div>
                            {/* <div>
                                <button type='submit' className='lorem-btn'>
                                Buy
                                </button>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="hashim-setions">
                        <div className="img-section">
                          <img
                            src={Slidera}
                            className="img-fluid"
                            alt="Ginger Hashim.."
                          />
                          <div className="like-sections">
                            <img src={Like} className="img-fluid" alt="like" />
                          </div>
                        </div>

                        <div className="Gsinger-details">
                          <div className="hashim-detail">
                            <div>
                              <h2>Ginger Hashim..</h2>
                            </div>
                            <div>
                              <h6 className="pe-2">$80</h6>
                            </div>
                          </div>
                          <div className="but-section">
                            <div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisc
                                ingelit. Sed neque egestas sem.
                              </p>
                            </div>
                            <div>
                              <button type="submit" className="lorem-btn">
                                Buy
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="hashim-setions">
                        <div className="img-section">
                          <img
                            src={Sliderb}
                            className="img-fluid"
                            alt="Ginger Hashim.."
                          />
                          <div className="like-sections">
                            <img src={Like} className="img-fluid" alt="like" />
                          </div>
                        </div>

                        <div className="Gsinger-details">
                          <div className="hashim-detail">
                            <div>
                              <h2>Ginger Hashim..</h2>
                            </div>
                            {/* <div >
                        <h6>
                            $80
                        </h6>
                       </div> */}
                          </div>
                          <div className="but-section">
                            <div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisc
                                ingelit. Sed neque egestas sem.
                              </p>
                            </div>
                            {/* <div>
                                <button type='submit' className='lorem-btn'>
                                Buy
                                </button>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="hashim-setions">
                        <div className="img-section">
                          <img
                            src={Sliderc}
                            className="img-fluid"
                            alt="Ginger Hashim.."
                          />
                          <div className="like-sections">
                            <img src={Like} className="img-fluid" alt="like" />
                          </div>
                        </div>

                        <div className="Gsinger-details">
                          <div className="hashim-detail">
                            <div>
                              <h2>Ginger Hashim..</h2>
                            </div>
                            {/* <div >
                        <h6>
                            $80
                        </h6>
                       </div> */}
                          </div>
                          <div className="but-section">
                            <div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisc
                                ingelit. Sed neque egestas sem.
                              </p>
                            </div>
                            {/* <div>
                                <button type='submit' className='lorem-btn'>
                                Buy
                                </button>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>

                  {/* <div className='hashim-setion'>
                    <div className='img-section'>
                        <img src={Gsingerashimc}className='img-fluid' alt='Ginger Hashim..' />
                        <div className='like-section'>
                          <img src={ Like} className='img-fluid' alt='like'/>
                    </div>
                    </div>
               
                     <div className='Gsinger-details'>
                           <div className='hashim-detail'>
                       <div>
                       <h2>
                           Ginger Hashim..
                           </h2>
                       </div>
                       <div >
                        <h6>
                            $80
                        </h6>
                       </div>
                       </div>
                          <div>
                            <div>
                            <p>
                           Lorem ipsum dolor sit amet, consectetur adipisc ingelit. Sed neque egestas sem.
                           </p>
                            </div>
                            <div>
                                <button type='submit'>
                                        submit
                                </button>
                            </div>
                          </div>
                           
                           
                     </div>
                 </div> */}
                </div>
              </div>
            </div>

            {/* end */}
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
};
export default Tutors;

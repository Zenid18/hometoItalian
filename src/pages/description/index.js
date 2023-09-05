import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Teresa from "../../assets/image/teresa.png";
import Heart from "../../assets/image/heart.png";
import CoursesTab from "../../components/course-tab";
import Availability from "../../components/availability";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as url from "../../constants/urls";
import { getTutorDetail } from "../../redux/services/otherServices/TeacherManagement";
const Description = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const [tutor, setTutor] = useState({})
  const location = useLocation();
  const data = location.state;
  useEffect(() => {
    handleTeacherDetail();
    window.scrollTo(0, 0);

  }, []);
  const handleTeacherDetail = async () => {
    const body = {
      teacher_id: data
    };
    // const res = await dispatch(getTutorDetail(body));
    // if (res?.status == 200 || res?.success == true) {
    //   setTutor(res.data) 
    // } else {
    // }
  };
  console.log(tutor, "lll");
  return (
    <div className="description">
      <Header />
      <section className="description-inner section-padding">
        <div className="container">
          <div className="row">
            <div className="back-btn my-3">
              <button
                onClick={() => nevigate("/tutors")}
                className="border-0 bg-transparent teacher-detail"
              >
                <i class="fa fa-angle-left" style={{ color: "#000000" }}></i>{" "}
                Back
              </button>
            </div>
            <div className="col-12 col-lg-8">
              <div className="teresa p-3 rounded-4 ">
                <div className="teresa-upper d-flex flex-column flex-sm-row gap-sm-3 justify-content-between pb-5">
                  <div className="teresa-img">
                    <img
                      src={url?.BASE_URL + tutor.teacher_img}
                      className="img-fluid rounded-4"
                      alt="Ginger Hashim.."
                    />
                  </div>
                  <div className="teresa-data d-flex flex-column justify-content-between w-100">
                    <div className="teresa-upper-data">
                      <div className="teresa-heading d-flex align-items-center justify-content-sm-between">
                        <h2 className="m-0">
                          {tutor.first_name}&nbsp; {tutor.last_name}
                        </h2>
                        <img src={Heart} />
                      </div>
                      <p className="w-75">
                        <span> Languages spoken: </span> {tutor.lang}
                      </p>
                    </div>

                    <div className="teresa-lower-data">
                      <button className="border-0 teresa-btn rounded-pill bg-danger mb-1">
                        Message
                      </button>
                    </div>
                  </div>
                </div>
                <div className="teresa-lower pb-4">
                  <h3 className="teresa-lower-heading mb-2">
                    About {tutor.first_name}
                  </h3>
                  <p className="mb-0">
                    {tutor.about}
                    {/* <button className="border-0 bg-transparent text-primary">
                      Load more
                    </button> */}
                  </p>
                </div>
              </div>
              <div className="tab-box pt-5">
                <ul
                  class="nav nav-pills mb-3 gap-md-3 gap-lg-4"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Courses
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Podcasts
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Live Events
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-disabled-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-disabled"
                      type="button"
                      role="tab"
                      aria-controls="pills-disabled"
                      aria-selected="false"
                    >
                      ebooks
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                    tabindex="0"
                  >
                    <CoursesTab />
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                    tabindex="0"
                  >
                    <CoursesTab />
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                    tabindex="0"
                  >
                    <CoursesTab />
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-disabled"
                    role="tabpanel"
                    aria-labelledby="pills-disabled-tab"
                    tabindex="0"
                  >
                    <CoursesTab />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mt-4 mt-lg-0">
              <Availability />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Description;

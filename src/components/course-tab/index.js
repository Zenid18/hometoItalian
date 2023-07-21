import React from "react";
import CoursesTabImg from "../../assets/image/course-tab-img.png";
import KingIcon from "../../assets/image/king-icon.png";
import HeartCircle from "../../assets/image/heart-circle.png";
import CourseProfileImg from "../../assets/image/course-profile-img.png";
import { useNavigate } from "react-router-dom";
import "./style.css";
const CoursesTab = () => {
    const CourseTabItems = ["1", "2", "3", "4","5", "6"]
        const nevigate = useNavigate();
  return (
    <div className="course-tab">
      <div className="row">
        {CourseTabItems.map((val, i)=>{
            return (
              <div className={`col-12 col-md-6 col-xl-4 mb-4 ${val}`} key={i}>
                <div
                  onClick={() => nevigate("/course-lesson")}
                  className="course-tab-box p-3 rounded-3 pointer"
                >
                  <div className="course-tab-img ">
                    <img
                      src={CoursesTabImg}
                      className="img-fluid rounded-3 course-inner-img"
                    />
                    <div className="course-icon-img d-flex justify-content-between align-items-center w-100 px-2">
                      <img
                        src={KingIcon}
                        className="img-fluid king-img"
                        alt="KingIcon"
                      />
                      <img
                        src={HeartCircle}
                        className="img-fluid heart-circle-img"
                        alt="HeartCircle"
                      />
                    </div>
                  </div>
                  <div className="course-heading-price d-flex justify-content-between align-items-center pt-2">
                    <h3 className="mb-0">Joe Root</h3>
                    <p className="mb-0">$80</p>
                  </div>
                  <p className="course-tab-para">
                    10 easy way to became a UI/UX designer in 2022
                  </p>
                  <div className="course-profile d-flex justify-content-between align-items-center">
                    <div className="course-profile-data d-flex align-items-center">
                      <div className="course-profile-img bg-body-secondary rounded-circle me-2">
                        <img src={CourseProfileImg} />
                      </div>
                      <span>Lina</span>
                    </div>

                    <button className="course-buy-btn border-0 rounded-pill px-4 py-1">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            );
        })}
        <div className="more-course text-center mt-5">
            <button className="py-2">
                More Courses
            </button>
        </div>
      </div>
    </div>
  );
};
export default CoursesTab;

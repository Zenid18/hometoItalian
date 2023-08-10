import React, { useEffect, useState } from "react";
import CoursesTabImg from "../../assets/image/course-tab-img.png";
import KingIcon from "../../assets/image/king-icon.png";
import HeartCircle from "../../assets/image/heart-circle.png";
import CourseProfileImg from "../../assets/image/course-profile-img.png";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch } from "react-redux";
import { getCourseList } from "../../redux/services/otherServices/Courses";
import * as url from '../../constants/urls'
const CoursesTab = () => {
  const dispatch = useDispatch()
  const [courseData, setCourseData] = useState([])
  useEffect(() => {
    handleCourses()
  }, [])
  const handleCourses = async () => {
    const res = await dispatch(getCourseList())
    if (res?.status == 200 || res?.sucess == true) {
      setCourseData(res?.data)
    }
  }

  return (
    <div className="course-tab">
      <div className="row">
        {courseData.map((val, i) => {
          return (
            <div className={`col-12 col-md-6 col-xl-4 mb-4 ${val}`} key={i}>
              <div

                className="course-tab-box p-3 rounded-3 pointer"
              >
                <div className="course-tab-img ">
                  <img
                    src={val?.course_img ? url?.BASE_URL + val?.course_img : ""}
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
                  <h3 className="mb-0">{val?.title || "N/A"}</h3>
                  <p className="mb-0">${val?.price || "0"}</p>
                </div>
                <p className="course-tab-para">
                  {val?.description || "N/A"}
                </p>
                <div className="course-profile d-flex justify-content-between align-items-center">
                  <div className="course-profile-data d-flex align-items-center">
                    <div className="course-profile-img overflow-hidden bg-body-secondary rounded-circle me-2">
                      <img className="img-fluid" src={val?.teacher_id?.teacher_img ? url?.BASE_URL + val?.teacher_id?.teacher_img : ""} />
                    </div>
                    <span>{val?.teacher_id?.first_name ? val?.teacher_id?.first_name + " " + val?.teacher_id?.last_name : ""}</span>
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

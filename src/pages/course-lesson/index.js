import React from "react";
import "./style.css"
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";

const CouseLesson = ()=>{
    const nevigate = useNavigate();
    return (
      <>
        <Header />
        <div className="course-lesson section-padding">
          <div className="container">
            <div className="row">
              <div className="back-btn my-3">
                <button
                  onClick={() => nevigate("/description")}
                  className="border-0 bg-transparent teacher-detail"
                >
                  <i class="fa fa-angle-left" style={{ color: "#000000" }}></i>{" "}
                  Back
                </button>
              </div>
              <div className="col-md-5"></div>
              <div className="col-md-7">
                <div className="course-video-box">
                  <h2>LEARN THE MOST COMMON ENGLISH PHRASAL VERBS</h2>
                  <p>English Native, Portuguese C2, Spanish C1</p>
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4"/>
  <source src="movie.ogg" type="video/ogg"/>
  Your browser does not support the video tag.
</video>
                  <p>15 Apr 14 Mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}
export default CouseLesson;
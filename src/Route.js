import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Testimontial from "./pages/testimonials";
import Tutors from "./pages/tutorslisiting";
import Description from "./pages/description";
import DescriptionPayment from "./pages/description-payment";
import CouseLesson from "./pages/course-lesson";
import { getData, storageKey } from "./constants/storage";
import Protected from "./components/protected";
const AppRoutes = () => {
  // const auth = getData(storageKey?.AUTH_TOKEN);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonials" element={<Testimontial />} />
        <Route path="/tutors" element={<Protected Cmp={Tutors} />} />
        <Route path="/description" element={<Protected Cmp={Description} />} />
        <Route path="/description-payment" element={<Protected Cmp={DescriptionPayment} />} />
        <Route path="/course-lesson" element={<Protected Cmp={CouseLesson} />} />
      </Routes>
    </Router>
    // <Router>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/testimonials" element={<Testimontial />} />
    //       <Route path="/tutors" element={<Tutors />} />
    //       <Route path="/description" element={<Description />} />
    //       <Route path="/description-payment" element={<DescriptionPayment />} />
    //       <Route path="/course-lesson" element={<CouseLesson />} />
    //     </Routes>
    // </Router>
  );
};

export default AppRoutes;

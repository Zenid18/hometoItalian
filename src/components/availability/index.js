import React from "react";
import "./style.css"
import { useNavigate } from "react-router-dom";

const Availability = ()=>{
    const nevigate = useNavigate()
    return (
      <div className="availability rounded-4">
        <div className="availability-heading p-3 rounded-top-4">
          Check Availability
        </div>
        <div className="availability-inner-box p-3">
          <div class="meeting-box">
            <div class="meeting-inner-box d-flex gap-3 mb-3">
              <div class="meeting-time px-2 py-2 text-nowrap">8:00 A.M.</div>
              <div class="meeting-para rounded-3 w-100 p-2">
                <p className="mb-0">Scrum Meeting</p>
                <span> 8:00 A.M. - 9:00 A.M.</span>
              </div>
            </div>
            <div class="meeting-inner-box d-flex gap-3 mb-3">
              <div class="meeting-time px-2 py-2 text-nowrap">9:00 A.M.</div>
            </div>
            <div class="meeting-inner-box d-flex gap-3 mb-3">
              <div class="meeting-time px-2 py-2 text-nowrap">10:00 A.M.</div>
            </div>
            <div class="meeting-inner-box d-flex gap-3 mb-3">
              <div class="meeting-time px-2 py-2 text-nowrap">11:00 A.M.</div>
              <div class="meeting-para rounded-3 w-100 p-2">
                <p className="mb-0">Scrum Meeting</p>
                <span> 11:00 A.M. - 12:00 P.M.</span>
              </div>
            </div>
            <div class="meeting-inner-box d-flex gap-3 mb-3">
              <div class="meeting-time px-2 py-2 text-nowrap">12:00 A.M.</div>
            </div>
          </div>
          <div className="buy-slot-btn-box text-center pt-4">
            <button
              onClick={() => nevigate("/description-payment")}
              className="border-0 w-75 py-2 rounded-pill"
            >
              Buy Slot
            </button>
          </div>
        </div>
      </div>
    );
}
export default Availability;
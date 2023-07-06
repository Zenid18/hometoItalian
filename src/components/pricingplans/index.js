import React from "react";
import Form from 'react-bootstrap/Form'; 
import './style.css';
import '../../App.css';

import Dropdown from 'react-bootstrap/Dropdown';
const Popupes = (props) => { 
    return (
      <div className="popup-overlay">
        <div className="popup-content width-set">
          <div className='popup-logo pb-2'>
                    <div>
                          <div  className="plans">
                            <h3>Pricing Plans</h3>
                          </div>
                            <div className="simple-text">
                                <p>
                                    Our simple pricing plans for Brands of all sizes! For more information on the
                                    best adapted to your needs, contact our team.
                                </p>
                            </div>
                            <div className="save-detail">
                                <p> <i class="fa-solid fa-circle-info"></i>
                                     Save upto 17% by selecting yearly pricing.
                                </p>
                            </div>
                       </div>
          <div>
          <button onClick={()=>props?.setShow(false)} className='close-popup' > <i class="fa-solid fa-xmark"></i>  </button>
          </div>
          </div> 

                 <div className='pop-section'>
                   <div className="container">
                    <div className="row  justify-content-center">
                        <div className="col-lg-6 col-md-6 col-12">
                              <div className="main-plan-section">
                                <div className="plan-header">
                                    <h4>
                                    Free Plan
                                    </h4>
                                    <h2>
                                    $0/<sub>mo</sub>
                                    </h2>

                                </div>
                                <div className="plan-list-section">
                                    <ul>

                                        <li>
                                            <p>
                                            Unlimited Landing Pages
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                            Unlimited Team Members
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                            Unlimited Leads
                                            </p>
                                        </li>
                                        <li>
                                             <p>
                                             Unlimited Page Views
                                             </p>
                                        </li>
                                        <li>
                                            <p>
                                            Export in HTML/CSS
                                            </p>
                                        </li>
                                    </ul>

                                </div>
                             <div>
                                <div>
                                <div className="plan-btn">
                                        
                                        <button type="submit" className='custome-subcribe' >Buy Now</button>
                                                        </div>
                                </div>
                             </div>
                              </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                              <div className="main-plan-section">

                                <div className="plan-headers ">
                                    <div className="drop-section">
                                                        <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                        Yearly
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                                    </div>
                                    <h4 className="text-white">
                                    Premium Plan
                                    </h4>
                                    <h2 className="text-white">
                                    $0/<sub>mo</sub>
                                    </h2>

                                </div>
                                <div className="plan-list-section">
                                    <ul>

                                        <li>
                                            <p>
                                            Unlimited Landing Pages
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                            Unlimited Team Members
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                            Unlimited Leads
                                            </p>
                                        </li>
                                        <li>
                                             <p>
                                             Unlimited Page Views
                                             </p>
                                        </li>
                                        <li>
                                            <p>
                                            Export in HTML/CSS
                                            </p>
                                        </li>
                                    </ul>

                                </div>
                             <div>
                                <div className="plan-btn">
                                        
                <button type="submit" className='custome-subcribe' >Buy Now</button>
                                </div>
                             </div>
                              </div>
                        </div>
                        </div> 
                    
                   </div>
                 </div>

           
        
                   
         
         
        </div> 
      </div>
      
    );
  };
   export default Popupes;
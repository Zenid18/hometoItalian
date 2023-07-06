// import Popimg from '../../assets/images/pop-img.png';
import React from "react";
import Form from 'react-bootstrap/Form'; 
import './style.css';
import '../../App.css';
import Loginimg from "../../assets/image/loginlogo.png";
import Google from '../../assets/image/google.png';
import Insta from '../../assets/image/insta.png';
import Facebook from '../../assets/image/facebook.png'
const Popups = (props) => { 
    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <div className='popup-logo pb-2'>
                    <div>
                          <img src={Loginimg} className="img-fluid" alt="logo">
                          </img>
                       </div>
          <div>
          <button onClick={()=>props?.setShow(false)} className='close-popup' > <i class="fa-solid fa-xmark"></i>  </button>
          </div>
          </div> 

                 <div className='pop-section'>
                    {/* <div>
                      <img src={Popimg} className='img-fluid' alt='pop'></img>
                    </div> */}
                      <div>
                      <Form>
                        <div className="row align-items-center justify-content-center">
                        <div className="login-from">
                              <input type="text" className="form-control" placeholder="Full Name" required /> 
                           <div className="icon">
                           <i class="fa-solid fa-user"></i>
                           </div>
                           </div>
                           <div className="login-from set-top">
                              <input type="text" className="form-control" placeholder="Last Name" required /> 
                           <div className="icon">
                           <i class="fa-solid fa-user"></i>
                           </div>
                           </div>
                           <div className="login-from set-top">
                              <input type="email" className="form-control" placeholder="Email Address" required /> 
                           <div className="icon">
                           <i class="fa-solid fa-envelope"></i>
                           </div>
                           </div>
                           <div className="login-from set-top">
                              <input type="password" className="form-control" placeholder="Password" required /> 
                           <div className="icon">
                           <i class="fa-solid fa-eye-slash"></i>
                           </div>
                          
                           </div>
                           <div className="login-from set-top">
                              <input type="password" className="form-control" placeholder="Confirm Password" required /> 
                           <div className="icon">
                           <i class="fa-solid fa-eye-slash"></i>
                           </div>
                          
                           </div>
                             
                             <div className="button-section">
                             <button type="submit" className="loginbtn form-control" size="lg" >
                                 Login
                                      </button> 
                                 {/* <div>
                                  <p className="forget">
                                  <a href="#" className="forget-detail">Forgot Password</a>
                                  </p>
                                 </div> */}
                             </div>
                             {/* social-link */}
                             <div className="social-section">
                                 <ul >
                                  <li>
                                     <div className="soical-icon icon-set">
                                       <img src={Google} className="img-fluid" alt="Google">
                                       </img>
                                       <p>
                                       Google
                                       </p>
                                     </div>
                        
                                  </li>
                                  <li>
                                     <div className="soical-icon icon-set">
                                       <img src={Insta} className="img-fluid" alt="insta">
                                       </img>
                                       <p>
                                       Instagram
                                       </p>
                                     </div>
                        
                                  </li>
                                  {/* <li>
                                     <div className="soical-icon">
                                       <img src={Facebook} className="img-fluid" alt="facebook">
                                       </img>
                                       <p>
                                       Facebook
                                       </p>
                                     </div>
                        
                                  </li> */}
                                 </ul>
                             </div>
                             {/* end */}
                          
                             <div className="text-center">
                              <p className="an-detail">
                              Already have an account? <a className="account-detail" href="#">Register </a>
                              </p>
                               
                             </div>

                        </div>
  
    </Form>
                       
                      </div>
                 </div>

           
        
                   
         
         
        </div> 
      </div>
      
    );
  };
   export default Popups;
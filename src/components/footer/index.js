import React from 'react';
import '../../App.css';
import'./style.css';
import Button from 'react-bootstrap/Button';   //buttom import
import Form from 'react-bootstrap/Form';  //Formimpot
import Footerlogo from '../../assets/image/footer-logo.png'
const Footer =( )=>{
return(
<section className='footer-bg'>
    <footer>
    <div className='container'>
         <div className='row align-items-center justify-content-center logo-top'>
            <div className='col-lg-6'>
                <div className='text-center'>
                    <img src={Footerlogo} className='img-fluid' alt='logo'>
                    </img>
                </div>
            </div>
            <div className='row align-items-center justify-content-center news-top-padding'>
                 <div className='col-lg-6 col-md-7 col-10'>
                    <div className='text-center'>
                        <h3 className='sub-details'>
                                Subscribe to get our Newsletter
                        </h3>
                    </div>
                    <div className='text-center'>
                    <form className='Subscribe-section'>
      
                        <input
                        type="email"
                        className='form-control newletter'
                        placeholder='Your Email '
                        required
                        />
                
                <button type="submit" className='custome-subcribe'>Subscribe</button>
                 </form>
                    </div>

                 </div>
               
            </div>
            <div className='row align-items-center justify-content-center  news-top-padding'>
              <div className='col-lg-12'>
                <div className='footer-section'> 
                    <ul>
                        <li>
                            <p>
                            Our Plans
                            </p>
                        </li>
                        <li>
                            <p>
                            Book a Timeslot
                            </p>
                        </li>
                        <li>
                            <p>
                            Privacy Policy 
                            </p>
                        </li>
                        <li>
                            <p>
                            Terms & Conditions
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='footer-section sm-screen'> 
                    <ul>
                        <li>
                            <p>
                            Our Plans
                            </p>
                        </li>
                        <li>
                            <p>
                            Book a Timeslot
                            </p>
                        </li>
                        
                    </ul>
                    <ul>
                    <li>
                            <p>
                            Privacy Policy 
                            </p>
                        </li>
                        <li>
                            <p>
                            Terms & Conditions
                            </p>
                        </li>
                    </ul>
                </div>
              </div>
        </div>
        
         </div>
        </div>
    </footer>
 <section className='copyright-section'>
      <div className='container'>
        <div className='row align-items-center justify-content-center'>
              <div className='col-lg-12'>
                <div className='last-footer-section'> 
                     <p>
                     © 2021 Auri Studio AB. 
                     </p>
                </div>
                
              </div>
        </div>
        
      </div>
 </section>
</section>
);
};
export default Footer;
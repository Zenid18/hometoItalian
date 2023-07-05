import React from 'react';
import './style.css';
import '../../App.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from 'react-bootstrap/Button';  
import Caseimg from '../../assets/image/caesimg.png';
import Hedarimg from '../../assets/image/header-pic.png';
import Couresas from '../../assets/image/cur.png'
import Verfied from '../../assets/image/Verifiedteachers.png';
import lessons from '../../assets/image/Affordablelessons.png';
import  flexibility from '../../assets/image/clock.png';
import  Iqvq from '../../assets/image/iqvq.png';
import Iqva from '../../assets/image/ioa-a.png';
import Iqvb from '../../assets/image/iqv-b.png';
import Iqvc from '../../assets/image/iqv-c.png';
import Couresimg from '../../assets/image/courseimg.png';
import Couresa from '../../assets/image/coures-a.png';
import Coressb from '../../assets/image/crossgroup.png';
import Coressc from '../../assets/image/checkgroup.png';
import Timeslot from '../../assets/image/timeslot.png';
import Books from '../../assets/image/books.png';
import Star from '../../assets/image/Star.png';
import Resources from '../../assets/image/Resources.png';
import Resico  from '../../assets/image/resourceimg.png';
import Say from '../../assets/image/say.png';
import Line from '../../assets/image/Line.png'; 
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate()
    return(
<section> 
      <Header/>

<section>
  <div className='container'>
    <div className='row align-items-center justify-contnet-center'>
        <div className='col-lg-6 col-md-6 col-12'>
            <div>
                <h1 className='case-detail target'>
                   Benvenuti a casa!
                </h1>
                <div>
                    <p className='reconnect-details'>
                    We’ll help you reconnect with your Italian roots through an all-rounded environment made of language learning, Italian culture topics and the chance to meet a native Italian teacher for a live class, or even just for asking a couple of questions. Relax and enjoy coming back home, to Italian! Your nonna will be proud.
                    </p>
                </div>
                
                <div>
                                <Button variant="secondary" onClick={ () =>navigate ("/tutors")} size="lg" className='custome-iqvs' active>
                                Explore Teachers
                    </Button>
                </div>
            </div>
        </div> 
        <div className='col-lg-6 col-md-6 col-12'>
                 <div className='case-section'>
                    <div>
                            <img src={Caseimg} className='img-fluid' alt='Case'>
                            </img>
                           
                    </div>
                    <div className='head-section'>
                        <img src={Hedarimg } className='img-fluid' alt='hedar'></img>
                    </div>
                 </div>
        </div>
    </div>
{/*home-section */}

<section className='home-margin'>
<div className='row align-items-center justify-content-center'>
    <div className='col-lg-8 col-md-10 col-11'>
      <div>
      <h2 className='home-details '>
      Why learn with  <span>
      Verbling?
        </span>
        </h2>
      </div>
    </div>

    <div className='col-lg-7 col-md-9 col-12'>
        <div>
        <p className='skill-details'>
        Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.

        </p>
            </div> 

    </div>

</div>
<div className="verified-margin">
<div className='row align-items-center justify-content-center'>
    <div className='col-lg-4 col-md-6 col-12'>
         <div className='verified-section'>
                   <div className='verified-img'>
                      <img src = {Verfied} className='img-fluid' alt='verified'/>
                   </div>
                   <div className='main-detail-section'>
                       <h3 className='verified-details'>
                       Verified teachers
                       </h3>
                       <p className='community-details'>
                       Our community has over 10,000 expert tutors – all with prior teaching experience, vetted by our team.
                       </p>
                   </div>
         </div>
    </div>
    <div className='col-lg-4 col-md-6 col-12'>
    <div className='verified-section'>
                   <div className='verified-img'>
                      <img src = {lessons} className='img-fluid' alt='verified'/>
                   </div>
                   <div className='main-detail-section'>
                       <h3 className='verified-details'>
                       Affordable lessons
                       </h3>
                       <p className='community-details'>
                       Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance
                       </p>
                   </div>
         </div>
    </div>
    <div className='col-lg-4 col-md-6 col-12'>
    <div className='verified-section'>
                   <div className='verified-img'>
                      <img src = {flexibility } className='img-fluid' alt='verified'/>
                   </div>
                   <div className='main-detail-section'>
                       <h3 className='verified-details'>
                       Convenience & flexibility
                       </h3>
                       <p className='community-details'>
                       Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization 
                       </p>
                   </div>
         </div>
    </div>

</div>
</div>
</section>

<section className='find-margin'>
    <div className='row  justify-content-center'>
          <div className='col-lg-8 col-md-9 col-11'>
            <div className='text-center'>
            <h2 className='home-details'>
        Here's what you'll find at <span>
        Home to Italian
        </span>
        </h2>
                </div> 

          </div>
    </div>
  <div className='iqa-section'>
            <div className='row align-items-center justify-content-center'>
                    <div className='col-lg-6 col-mg-6 col-12'>
                        <div>
                            <h4 className='iqv-details margin-bttom'>
                            Italiano Quando Vuoi <span>(IQV) </span>
                            </h4>
                        </div>
                        <div className='Quando-details'>
                            <ul>
                                <li>
                                        <div className='program-section'>
                                            <div className='program-img' >
                                                <img src={Iqva} className='img-fluid' alt='IQV' />  
                                            </div>
                                            <div className='program-detail'>
                                                <p>
                                                A subscription program where you will find short video lessons with exercises.
                                                </p>
                                            </div>
                                        </div>
                                </li>
                                <li>
                                    <div className='program-section'>
                                                <div className='program-img' >
                                                    <img src={Iqvb} className='img-fluid' alt='IQV' />  
                                                </div>
                                                <div className='program-detail'>
                                                    <p>
                                                    It is perfect if you have little time to learn and practise but still want to see yourself get closer and closer every day to speaking and understanding Italian and Italy.
                                                    </p>
                                                </div>
                                        </div>
                                </li>
                                <li>
                                <div className='program-section'>
                                            <div className='program-img' >
                                                <img src={Iqvc} className='img-fluid' alt='IQV' />  
                                            </div>
                                            <div className='program-detail'>
                                                <p>
                                                The content in IQV is updated and enriched every month!
                                                </p>
                                            </div>
                                        </div> 
                               </li>
                                   
                            </ul>
                            <div className='explore-btn'>
                                        <Button variant="secondary" size="lg" className='custome-iqvs' active>
                                        Explore IQVs
                                  </Button>
                            </div>
                        
                                
                        
                        </div>
                     
                    
                        
                    </div>
                    <div className='col-lg-6 col-mg-6 col-12'>
                            <div className='iqc-img'>
                                <img  src={Iqvq} className='img-fluid' alt='iQv' ></img>
                                {/* <div className='circle-a'>
                                    <img src={Circle}  className='img-fluid' alt='cricle'>  </img>
                                </div> */}
                            </div>
                    </div>

                </div>
  </div>

</section>


<section className='find-margin'>

  <div className=''>
            <div className='row align-items-center justify-content-center row-revers'>
                   
                    <div className='col-lg-6 col-mg-6 col-12'>
                            <div className='Couresimg-section'>
                             <div>
                             <img  src={Couresimg} className='img-fluid' alt='iQv'  />
                        
                             </div>
                             <div className='sec-couers'>
                             <img src={Couresas}  className='img-fluid' alt='cricle' /> 
                             </div>
                                <div className='circle-a'>
                                    <img src={Couresa}  className='img-fluid' alt='cricle' />  
                                </div>
                            </div>
                    </div>
                    <div className='col-lg-6 col-mg-6 col-12'>
                        <div>
                            <h4 className='iqv-details animation margin-bttom'>
                            Online  <span>Courses </span>
                            </h4>
                        </div>
                        <div className='Quando-details'>
                            < p className='courses-detail'> 
                            Our courses are designed and delivered by our native Italian teachers, with tests to assess your progress, the chance to meet your teacher during office hours to ask questions and a certificate of completion.
                            </p>
                            <div >
                                        <Button variant="secondary" size="lg" className='custome-iqvs' active>
                                        Explore Courses
                                  </Button>
                            </div>
                        
                                
                        
                        </div>
                     
                    
                        
                    </div>

                </div>
  </div>

</section>


            <section className='find-margin'>
                        <div className=''>
                                    <div className='row align-items-center justify-content-center'>
                                    <div className='col-lg-6 col-mg-6 col-12'>
                                                <div>
                                    
                                                    <h4 className='iqv-details'>
                                                        <span>Book a timeslot:</span>
                                                    </h4>
                                                    <h4 className='iqv-details margin-bttom'>
                                                    it’s comfortable, we’re home!
                                                    </h4>
                                                </div>
                                                <div className='Quando-details'>
                                                    < p className='courses-detail'> 
                                                    Whether you are studying by yourself with one of our courses and have a few questions, or you want to have a thorough discussion with a teacher about a topic, book a slot during our available office hours! You can decide to talk with your teacher for 15, 30 or 45 minutes. We can as well plan a cycle of 1:1 or group lessons together.
                                                
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-mg-6 col-12'>
                                                    <div className='Couresimg-section'>
                                                    <div>
                                                    <img  src={Timeslot} className='img-fluid' alt='iQv'  />
                                                    <div className='books-section'>
                                                    <div className='book-img'>
                                                        <img src={Books} className='img-fluid' alt='group'/> 
                                                        </div>
                                                    </div>
                                                    <div className='star-section'>
                                                        
                                                    <div className='star-img'>
                                                    <img src={Star} className='img-fluid' alt='group'/> 
                                                    </div>
                                                    </div>
                                                    </div>
                                                        {/* <div className='circle-a'>
                                                            <img src={Couresa}  className='img-fluid' alt='cricle' />  
                                                        </div> */}
                                                    </div>
                                            </div>
                                    </div>
                        </div>
            </section>

            <section className='find-margin'>
                        <div className=''>
                                    <div className='row align-items-center justify-content-center row-revers'>
                                  
                                            <div className='col-lg-6 col-mg-6 col-12'>
                                                    <div className='Couresimg-section'>
                                                    <div>
                                                    <img  src={Resources} className='img-fluid' alt='iQv'  />
                                                  
                                                    <div className='star-section'>
                                                        
                                                    <div className='contact-img'>
                                                    <img src={Resico } className='img-fluid' alt='group'/> 
                                                    </div>
                                                    </div>
                                                    </div>
                                                        {/* <div className='circle-a'>
                                                            <img src={Couresa}  className='img-fluid' alt='cricle' />  
                                                        </div> */}
                                                    </div>
                                            </div>
                                            <div className='col-lg-6 col-mg-6 col-12'>
                                                <div>
                                    
                                                    
                                                    <h4 className='iqv-details animation margin-bttom'>
                                                    Resources
                                                    </h4>
                                                </div>
                                                <div className='Quando-details'>
                                                    < p className='courses-detail'> 
                                                    A library of materials that you can download to support your study. You will find PDF’s, cheat-sheets, e-books about everything Italian.
                                                
                                                    </p>
                                                </div>
                                            </div>
                                    </div>
                        </div>
            </section>

            <section className='find-margin'>
                        <div className=''>
                                    <div className='row align-items-center justify-content-center'>
                                  
                                          
                                            <div className='col-lg-6 col-mg-6 col-12'>
                                                <div className='test-section'>
                                                    <div>
                                                        <span className='span-d'>
                                                                  <img src={Line} className='img-fluid' alt='Line' /> 
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className='test-detail'>
                                                        TESTIMONIAL
                                                        </p>
                                                    </div>
                                                    
                                                   
                                                </div>
                                                <div>
                                                <h4 className='say-detail margin-bttom'>
                                                    What They Say?
                                                    </h4>
                                                </div>
                                                <div className='Quando-details'>
                                                    < p className='courses-detail'> 
                                                    Skilline has got more than 100k positive ratings from our users around the world.
                                                    </p>
                                                    < p className='courses-detail'> 
                                                    Some of the students and teachers were greatly helped by the Skilline.
                                                    </p>
                                                    < p className='courses-detail'> 
                                                    Are you too? Please give your assessment
                                                    </p>
                                                </div>
                                            <div className='view-btn'>
                                            <button type='submit' onClick={() => navigate("/testimonials")} className='custome-view'>
                                            View All  <i class="fa-solid fa-arrow-right"></i>
                                              </button>
                                            </div>


                                            </div>
                                            <div className='col-lg-6 col-mg-6 col-12'>
                                                    <div className='Couresimg-section set-coures'>
                                                    <div>
                                                    <img  src={Say} className='img-fluid' alt='iQv'  />
                                                  
                                                    
                                                    </div>
                                                       <div className='help-section'>
                                                            <p className='help-detail'>
                                                            "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."
                                                            </p>
                                                            <div className='rose-section'>
                                                                <ul>
                                                                    <li>
                                                                        <p>
                                                                        Gloria Rose
                                                                        </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>12 reviews at Yelp </p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                       </div>
                                                    </div>
                                            </div>
                                    </div>
                        </div>
            </section>



  </div>
</section>


<Footer/>
</section>

    );
};

export default Home;
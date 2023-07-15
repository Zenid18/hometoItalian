import React, { useEffect, useState } from 'react';
import '../../App.css';
import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  Message  from '../../assets/image/message.png';
import Dashboard from '../../assets/image/dropdashboard.png';
import Logouts from '../../assets/image/power.png';
import Favourites from '../../assets/image/Favourites.png';
import Myschedules from '../../assets/image/MySchedules.png'
import Notifications from '../../assets/image/notifiction.png';
import Dropimg from '../../assets/image/dropdown.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/image/logo.png';
import Iconsearch from '../../assets/image/fa_search.png'
import Popup from '../../components/login';
import Popups from '../../components/sign-up';
import { useNavigate } from 'react-router-dom';
import { getData, storageKey } from '../../constants/storage';
const Header = () =>{
  const navigate = useNavigate()
   const [show,setShow] = useState(false)
   const [show1,setShow1] = useState(false)
   const [auth,setAuth] = useState()

    useEffect(()=>{
 const data = getData(storageKey?.AUTH_TOKEN)
 setAuth(data)
    },[getData])
    return(
        <div>
             <Navbar expand="lg" className="">
      <Container>
        
        <Navbar.Brand href="#home">
            <img onClick={()=>{navigate("/")}} src={Logo} className='img-fluid' alt='Logo'/> 
        </Navbar.Brand>
        <Form className="searchfrom from-set">
            <Form.Control
              type="search"
              placeholder="Search"
              className="seach-input"
              aria-label="Search"
            />
               <div className='search-icon'>
                  <img src= {Iconsearch } className='img-fluid' alt='Search'></img>
               </div>
          </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Form className="searchfrom search-from">
            <Form.Control
              type="search"
              placeholder="Search"
              className="seach-input"
              aria-label="Search"
            />
               <div className='search-icon'>
                  <img src= {Iconsearch } className='img-fluid' alt='Search'></img>
               </div>
          </Form>
            <Nav.Link href="#home" className='nav-item'>Book a Timeslot</Nav.Link>
  {!auth ? 
   <div className='login-margin'>
            <Button variant="secondary" className='custome-btn login' size="lg" active  onClick={()=>setShow(true)}>
            Login
      </Button>
      <Button onClick={()=>setShow1(true)} variant="secondary" className='custome-btn sign' size="lg" active>
      Sign Up
      </Button>
 
      </div>
      : <div className='afterlogin'>
      <div className='section-afterlogin'>
 <div className='message'>
  <img src={Message}  className='img-fluid' alt='Message'/>
 </div>
 <div className='notifiction'>
  <img src={Notifications}  className='img-fluid' alt='Message'/>
 </div>
 <div className='logindrop'>
  {/* <img src={Dropimg}  className='img-fluid' alt='Message'/> */}
  <NavDropdown title={<img src={Dropimg} className='img-fluid' alt='Message' />} id="basic-nav-dropdown">
  <NavDropdown.Item href="#action/3.1"><img src={Dashboard} className='img-fluid ' alt='Dashboard'/>Dashboard</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.2"><img src={Favourites } className='img-fluid' alt='Favourites'/>Favourites</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.3"><img src={Myschedules } className='img-fluid' alt='Favourites'/>My Schedules</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.4"><img src={Logouts } className='img-fluid' alt='Favourites'/>Logout</NavDropdown.Item>

</NavDropdown>
 
 </div>
      </div>
      </div>}
        
      
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {show ? <Popup show ={show} setShow ={setShow}/> :""}
    {show1 ? <Popups show ={show1} setShow ={setShow1}/> :""}
        </div>
    );
};
export default Header;
import React, { useState } from 'react';
import '../../App.css';
import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/image/logo.png';
import Iconsearch from '../../assets/image/fa_search.png'
import Popup from '../../components/login';
import Popups from '../../components/sign-up';
import { useNavigate } from 'react-router-dom';
const Header = () =>{
  const navigate = useNavigate()
   const [show,setShow] = useState(false)
   const [show1,setShow1] = useState(false)
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
            <Button variant="secondary" className='custome-btn login' size="lg" active  onClick={()=>setShow(true)}>
            Login
      </Button>
      <Button onClick={()=>setShow1(true)} variant="secondary" className='custome-btn sign' size="lg" active>
      Sign Up
      </Button>
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
          


              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
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
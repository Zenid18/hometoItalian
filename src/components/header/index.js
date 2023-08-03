import React, { useEffect, useState } from 'react';
import '../../App.css';
import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  Message  from '../../assets/image/svg/message-icon.svg';
import Dashboard from '../../assets/image/dropdashboard.png';
import Logouts from '../../assets/image/power.png';
import Favourites from '../../assets/image/Favourites.png';
import Myschedules from '../../assets/image/MySchedules.png'
import Notifications from '../../assets/image/svg/bell-icon.svg';
import Dropimg from '../../assets/image/dropdown.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/image/logo.png';
import Iconsearch from '../../assets/image/fa_search.png' 
import { useNavigate } from 'react-router-dom';
import { getData, storageKey } from '../../constants/storage';
import Login from '../login';
import SignUp from '../sign-up';
const Header = () =>{
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  //  const [auth,setAuth] = useState()

  //  useEffect(()=>{
  //   getDetails()
  //  },[auth])
  //   const getDetails =()=>{
  //      const data = getData(storageKey?.AUTH_TOKEN)
  //      if (data){
  //       setAuth(data)
  //      }
  //   }
  const auth = getData(storageKey?.AUTH_TOKEN);
  const tokenClear = () => {
    localStorage.removeItem(storageKey?.AUTH_TOKEN);
    navigate("/");
  }; 
  return (
    <div>
      <Navbar expand="lg" className="w-100 bg-white fixed-top">
        <Container>
          <Navbar.Brand
            className="pointer nav-logo"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={Logo} className="img-fluid" alt="Logo" />
          </Navbar.Brand>
          <Form className="searchfrom from-set">
            <Form.Control
              type="search"
              placeholder="Search"
              className="seach-input"
              aria-label="Search"
            />
            <div className="search-icon">
              <img src={Iconsearch} className="img-fluid" alt="Search"></img>
            </div>
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              {/* <Form className="searchfrom search-from">
            <Form.Control
              type="search"
              placeholder="Search"
              className="seach-input"
              aria-label="Search"
            />
               <div className='search-icon'>
                  <img src= {Iconsearch } className='img-fluid' alt='Search'></img>
               </div>
          </Form> */}
              <Nav.Link href="#home" className="nav-item">
                Book a Timeslot
              </Nav.Link>
              {!auth || auth == "undefined" ? (
                <div className="login-margin d-flex gap-4 pt-2 pt-lg-0">
                  <Button
                    className="custome-btn login"
                    size="lg"
                    active
                    onClick={() => setLogin(true)}
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => setSignUp(true)}
                    className="custome-btn sign"
                    size="lg"
                    active
                  >
                    Sign Up
                  </Button>
                </div>
              ) : (
                <div className="afterlogin px-3">
                  <div className="section-afterlogin gap-3">
                    <button className="message border-0 bg-transparent">
                      <img src={Message} className="img-fluid" alt="Message" />
                    </button>
                    <button className="notifiction border-0 bg-transparent">
                      <img
                        src={Notifications}
                        className="img-fluid"
                        alt="Message"
                      />
                    </button>
                    <div className="logindrop">
                      {/* <img src={Dropimg}  className='img-fluid' alt='Message'/> */}
                      <NavDropdown
                        title={
                          <img
                            src={Dropimg}
                            className="img-fluid"
                            alt="Message"
                          />
                        }
                        id="basic-nav-dropdown"
                      >
                        <NavDropdown.Item href="#action/3.1">
                          <img
                            src={Dashboard}
                            className="img-fluid "
                            alt="Dashboard"
                          />
                          Dashboard
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          <img
                            src={Favourites}
                            className="img-fluid"
                            alt="Favourites"
                          />
                          Favourites
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          <img
                            src={Myschedules}
                            className="img-fluid"
                            alt="Favourites"
                          />
                          My Schedules
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={tokenClear} href="">
                          <img
                            src={Logouts}
                            className="img-fluid"
                            alt="Favourites"
                          />
                          Logout
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  </div>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {login ? (
        <Login login={login} setLogin={setLogin} setSignUp={setSignUp} />
      ) : (
        ""
      )}
      {signUp ? (
        <SignUp signUp={signUp} setSignUp={setSignUp} setLogin={setLogin} />
      ) : (
        ""
      )}
    </div>
  );
};
export default Header;
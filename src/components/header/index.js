import React, { useEffect, useState } from 'react';
import '../../App.css';
import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Message from '../../assets/image/svg/message-icon.svg';
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
import profile from '../../assets/image/svg/profile.svg'
import { toast } from 'react-toastify';
import * as url from '../../constants/urls'
import Forgot from '../auth/forgot';
import Otp from '../auth/otp';
import Verify from '../auth/verify';
import Login from '../auth/login';
import SignUp from '../auth/sign-up';
import ResetPassword from '../auth/resetpassword';

const Header = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [otp, setOtp] = useState(false);
  const [verify, setVerify] = useState(false);
  const [reset, setReset] = useState(false)
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [email, setEmail] = useState("")
  const auth = getData(storageKey?.AUTH_TOKEN);

  useEffect(() => {
    const getUser = async () => {
      const data = await getData(storageKey?.USER_DATA)

      if (data) {
        setImage(data?.user_img)
      }
    };
    getUser();
  }, []);
  const tokenClear = () => {
    localStorage.removeItem(storageKey?.AUTH_TOKEN);
    toast.success("logout Successfully")
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
                            src={image ? url?.BASE_URL + image : profile}
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
      {login ? <Login setLogin={setLogin} setSignUp={setSignUp} setForgot={setForgot} /> : ""}
      {signUp ? <SignUp setSignUp={setSignUp} setLogin={setLogin} /> : ""}
      {forgot ? <Forgot setForgot={setForgot} setOtp={setOtp} setEmail={setEmail} /> : ""}
      {otp ? <Otp otp={otp} setOtp={setOtp} verify={verify} setVerify={setVerify} email={email} setEmail={setEmail} /> : ""}
      {verify ? <Verify setVerify={setVerify} setReset={setReset} /> : ""}
      {reset ? <ResetPassword setReset={setReset} setLogin={setLogin} email={email} setEmail={setEmail} /> : ""}

    </div>
  );
};
export default Header;
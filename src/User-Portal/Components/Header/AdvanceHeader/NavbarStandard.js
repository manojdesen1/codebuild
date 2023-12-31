import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory } from 'react-router-dom';
import { Icon } from '@iconify/react';
import AppContext from '../../../TemplateAssets/context/Context';
import trainer from '../../Projectimages/trainer.png'
import { Button, Dropdown, Badge, Container } from 'react-bootstrap';
import profile from '../../Projectimages/Handyman.jpg'
import logo from '../../Projectimages/My Project white logo-01.png'


function NavbarStandard() {

  const {
    config: { isDark }
  } = useContext(AppContext);
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(1);
  const [user, setUser] = useState({});
  const history = useHistory();

  const logOut = () => {
    sessionStorage.clear();
    if (user.role == "Owner") {
      history.push("/user/logout");
    } else {
      history.push("/freelance/logout");
    }
    // window.location.reload();
  }

  // 1 for enduser, 2 for owner, 3 for freelancer
  useEffect(() => {
    var _user = sessionStorage.getItem('user');
    var _json = JSON.parse(_user);
    setUser(_json);
    if (_json?.role == "Owner") {
      setId(2);
    }
    if (_json?.role == "Freelancer") {
      setId(3);
    }
    console.log('navbar_prop', id);
  }, [])


  // 
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='row'>
        <div className='col-12'>
          <nav style={{ background: '#003f6b' }} className="navbar fixed-top navbar-top navbar-expand-lg">
            <Container>
              <button className="btn navbar-toggler-humburger-icon navbar-toggler  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarStandard" aria-controls="navbarStandard" aria-expanded="false" aria-label="Toggle Navigation"><Icon icon="material-symbols:menu" color="white" width="20" height="20" /><span className="toggle-line"></span></button>
              <a className="navbar-brand me-1 me-sm-3">
                <div className="d-flex align-items-center">
                  <Link to="/">
                    <img
                      className="logo-image"
                      style={{ width: '120px' }}
                      title="MYPROJECT.AI"
                      src={logo}
                      alt="MAI Logo"
                    />
                  </Link>
                </div>
              </a>
              <div>
              </div>

              <div className="navbar-collapse  scrollbar collapse" id="navbarStandard" >
                <ul className="navbar-nav ms-lg-5" data-top-nav-dropdowns="data-top-nav-dropdowns">
                  {/* Post A Project */}
                  {id == 2 &&
                    <li>
                      <Button as={Link} to="/post-a-project" variant='falcon-default' className='me-3 mt-2 mt-lg-0 ms-2'>Post a Project</Button>
                    </li>
                  }
                  {/* Post A Project */}


                  {/* HIW */}
                  <li className=''>
                    <Link to="/how-it-work" className="link-item">
                      <a
                        title='How It Works'
                        className="ms-2 text-white nav-link"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="dashboards"
                      >
                        How It Works
                      </a>
                    </Link>
                  </li>
                  {/* HIW */}
                  {/* Products */}
                  <li>
                    <Link to="/products" className="link-item">
                      <a
                        title='Products'
                        className="ms-2 text-white nav-link"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="dashboards"
                      >
                        Products
                      </a>
                    </Link>
                  </li>
                  {/* Products */}
                  {/* Projects */}
                  <li>
                    <Link to="/projects" className="link-item">
                      <a
                        title='Projects'
                        className="ms-2 text-white nav-link"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="dashboards"
                      >
                        Projects
                      </a>
                    </Link>
                  </li>
                  {/* Projects */}
                  {/* Services */}
                  <li>
                    <Link to="/services" className="link-item">
                      <a
                        title='Services'
                        className="ms-2 text-white nav-link"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="dashboards"
                      >
                        Services
                      </a>
                    </Link>
                  </li>
                  {/* Services */}
                  {id == 1 &&
                    <>
                      {/* Owner Portal */}
                      <li className="nav-item dropdown">
                        <a
                          title='Click here to Login or Signup as Projectowner in Myproject.Ai'
                          className="ms-2 text-white nav-link "
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          id="dashboards"
                        >
                          Project Owner
                        </a>
                        <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="dashboards">
                          <div className="bg-white dark__bg-1000 rounded-3 py-2">
                            <Link to="/Project-owner/login">
                              <a title='Click here to Login as Projectowner in Myproject.Ai' className=" dropdown-item text-900 fw-medium">Login</a>
                            </Link>
                            <Link to="/Project-owner/register">
                              <a title='Click here to Signup as Projectowner in Myproject.Ai' className=" dropdown-item text-900 fw-medium">Sign Up</a>
                            </Link>
                          </div>
                        </div>
                      </li>
                      {/* Owner Portal */}

                      {/* Trader Portal */}
                      <li className="nav-item dropdown">
                        <a title='Click here to Login or Signup as Trader in Myproject.Ai' className="ms-2 text-white nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dashboards">Trader</a>
                        <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="dashboards">
                          <div className="bg-white dark__bg-1000 rounded-3 py-2">
                            <Link to="/freelancer/true">
                              <a title='Click here to Login as Trader in Myproject.Ai' className=" dropdown-item text-900 fw-medium" >Login</a>
                            </Link>
                            <Link to="/freelancer/false">
                              <a title='Click here to SignUp as Trader in Myproject.Ai' className=" dropdown-item text-900 fw-medium" >Sign Up</a>
                            </Link>
                          </div>
                        </div>
                      </li>
                      {/* Trader Portal */}
                    </>
                  }
                </ul>

              </div>
              <ul class="navbar-nav navbar-nav-icons ms-auto non-collapse-section flex-row align-items-center">
                {/* Cart */}
                <Link title='Cart' to="/cart">
                  <div className="cart-icon-container">
                    <Icon style={{ marginRight: '5px' }} className='me-2' icon="material-symbols:shopping-cart" color="white" width="24" height="24" />
                    <Badge pill bg="danger" className="cart-badge">
                      1
                    </Badge>
                  </div>
                </Link>
                {/* Cart */}
                {/* Wishlists */}
                <div className=''>
                  <Dropdown navbar={true} as="li">
                    <Dropdown.Toggle
                      bsPrefix="toggle"
                      as={Link}
                      title='Wishlists'
                      to="#!"
                      className=""
                    >
                      <Icon icon="wpf:like" style={{ marginRight: '5px', marginLeft: '5px' }} color="white" width="24" height="24" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu-card  me-2 dropdown-menu-end">
                      <div className="bg-white rounded-2 py-2 dark__bg-1000">
                        <Dropdown.Item href="#!">
                          <Link to="/wishlist/products">
                            <a className=" dropdown-item text-900 fw-medium" >
                              Products
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item href="#!">
                          <Link to="/wishlist/projects">
                            <a className=" dropdown-item text-900 fw-medium" >
                              Projects
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item href="#!">
                          <Link to="/wishlist/followers">
                            <a className=" dropdown-item text-900 fw-medium" >
                              Followers
                            </a>
                          </Link>
                        </Dropdown.Item>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>

                </div>
                {/* Wishlists */}

                {id != 1 &&
                  <>
                    {/* Notifications */}
                    <Dropdown navbar={true} as="li">
                      <Dropdown.Toggle
                        bsPrefix="toggle"
                        as={Link}
                        title='Notifications'
                        to="#!"
                        className=""
                      >
                        <Icon icon="mdi:bell" color="white" width="24" height="24" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown-menu-end  dropdown-menu-start dropdown-menu-card dropdown-menu-notification " aria-labelledby="navbarDropdownNotification" data-bs-popper="static">
                        <div className="card card-notification  shadow-none">
                          <div className="card-header">
                            <div className="row justify-content-between align-items-center">
                              <div className="col-auto">
                                <h4 className="card-header-title mb-0">Notifications</h4>
                              </div>
                              <div className="col-auto ps-0 ps-sm-3"><a className="card-link fw-normal" href="#">Mark all as read</a></div>
                            </div>
                          </div>
                          <div className="scrollbar-overlay" style={{ maxHeight: "19rem" }} data-simplebar="init">
                            <div className="simplebar-wrapper" style={{ margin: "0px" }}>
                              <div className="simplebar-height-auto-observer-wrapper">
                                <div className="simplebar-height-auto-observer">
                                </div>
                              </div>
                              {/* New Messages */}
                              <div className="simplebar-mask">
                                <div className="simplebar-offset" style={{ right: "0px", bottom: "0px" }}>
                                  <div className="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ height: "auto", overflow: "hidden scroll" }}><div className="simplebar-content" style={{ padding: '0px' }}>
                                    <div className="list-group list-group-flush fw-normal fs--1">
                                      <div className="list-group-title border-bottom">NEW</div>
                                      <Link to="/conversation">
                                        <div className="list-group-item">
                                          <a className="notification notification-flush notification-unread" href="#!">
                                            <div className="notification-avatar">
                                              <div className="avatar avatar-2xl me-3">
                                                <img className="rounded-circle" src={profile} alt="" />
                                              </div>
                                            </div>
                                            <div className="notification-body">
                                              <p className="mb-1"><span className="fw-semibold">Emma Watson</span> replied to your comment : "Hello world"</p>
                                              <span className="notification-time">Just now</span>
                                            </div>
                                          </a>
                                        </div>
                                      </Link>
                                      <Link to="/conversation">
                                        <div className="list-group-item">
                                          <a className="notification notification-flush notification-unread" href="#!">
                                            <div className="notification-avatar">
                                              <div className="avatar avatar-2xl me-3">
                                                <div className="avatar-name rounded-circle"><span>AB</span></div>
                                              </div>
                                            </div>
                                            <div className="notification-body">
                                              <p className="mb-1"><span className="fw-semibold">Emma Watson</span> replied to your comment : "Hello world"</p>
                                              <span className="notification-time">9hr</span>
                                            </div>
                                          </a>
                                        </div>
                                      </Link>
                                      {/* Earlier Messages */}
                                      <div className="list-group-title border-bottom">EARLIER</div>
                                      <Link to="/conversation">
                                        <div className="list-group-item">
                                          <a className="notification notification-flush" href="#!">
                                            <div className="notification-avatar">
                                              <div className="avatar avatar-2xl me-3">
                                                <img className="rounded-circle" src={profile} alt="" />
                                              </div>
                                            </div>
                                            <div className="notification-body">
                                              <p className="mb-1"><span className="fw-semibold">Emma Watson</span> replied to your comment : "Hello world"</p>
                                              <span className="notification-time">1d</span>
                                            </div>
                                          </a>
                                        </div>
                                      </Link>
                                    </div>
                                  </div></div></div></div><div className="simplebar-placeholder" style={{ width: "auto", height: "513px" }}></div></div><div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden", }}><div className="simplebar-scrollbar" style={{ width: "0px", display: "none" }}></div></div><div className="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}><div className="simplebar-scrollbar" style={{ height: "180px", display: "block", transform: "translate3d(0px, 59px, 0px)" }}></div></div></div>
                          <div className="card-footer text-center border-top">
                            <Link title='Click here to see your Notifications' to="/Notifications">
                              <a className="card-link d-block">View all</a>
                            </Link>
                          </div>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* Notifications */}
                  </>
                }
                {id != 1 &&
                  <>
                    <li className="nav-item dropdown">
                      {/* Profile */}
                      <div>
                        <Dropdown navbar={true} as="li">
                          <Dropdown.Toggle
                            bsPrefix="toggle"
                            as={Link}
                            to="#!"
                            className="pe-0 nav-link"
                          >
                            <div title='Profile' className="avatar me-1 avatar-xl">
                              <img className="rounded-circle" src={trainer} alt="" />
                            </div>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu-card me-2 dropdown-menu-end">
                            <div className="bg-white rounded-2 py-2 dark__bg-1000">
                              <Dropdown.Item className="fw-bold text-success" href="#!">
                                <FontAwesomeIcon icon="crown" className="me-1" />
                                <span>{user?.role}</span>
                              </Dropdown.Item>
                              <Dropdown.Divider />
                              {id == 3 && <Dropdown.Item as={Link} to="/trader/profile">Profile</Dropdown.Item>}
                              {id == 2 && <Dropdown.Item as={Link} to="/projectowner/profile">Profile</Dropdown.Item>}
                              {id == 2 && <Dropdown.Item as={Link} to="/dashboard/my-project">My Projects</Dropdown.Item>}
                              {/* {id == 2 && <Dropdown.Item as={Link} to="/workstreamcard">Workstreams</Dropdown.Item>} */}
                              {id == 3 && <Dropdown.Item as={Link} to="/dashboard-products">My Products</Dropdown.Item>}
                              {id == 2 && <Dropdown.Item as={Link} to="/conversation">Messages</Dropdown.Item>}
                              {id == 3 && <Dropdown.Item as={Link} to="/conversation">Messages</Dropdown.Item>}
                              {id == 3 && <Dropdown.Item as={Link} to="/dashboard-services">My Services</Dropdown.Item>}
                              {id == 3 && <Dropdown.Item as={Link} to="/user/myproposals">My Proposals</Dropdown.Item>}
                              {id == 3 && <Dropdown.Item as={Link} to="/t/invoices">Invoices</Dropdown.Item>}
                              {id == 2 && <Dropdown.Item as={Link} to="/p/invoices">Invoices</Dropdown.Item>}
                              {id == 3 && <Dropdown.Item as={Link} to="/t/estimate-list">Estimates</Dropdown.Item>}
                              {id == 2 && <Dropdown.Item as={Link} to="/p/estimate-list">Estimates</Dropdown.Item>}
                              {/* <Dropdown.Item as={Link} to="/reviewscard">Reviews</Dropdown.Item> */}
                              {/* <Dropdown.Divider /> */}
                              <Dropdown.Item as={Link} to="/enquire">Enquiries</Dropdown.Item>
                              {id == 3 && <Dropdown.Item as={Link} to="/user/setting">Settings</Dropdown.Item>}
                              <Dropdown.Item onClick={() => { logOut() }}>
                                Logout
                              </Dropdown.Item>
                            </div>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      {/* Profile */}
                    </li>
                  </>
                }
              </ul>
            </Container >
          </nav >
        </div>
      </div >
    </>
  )
}
export default NavbarStandard
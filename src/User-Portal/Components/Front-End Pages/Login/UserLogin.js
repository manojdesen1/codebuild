import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import worktops from '../../Projectimages/Conversions.jpg'
import React, { useState } from 'react';
import { Button, Col, Form, Row, Card, Container, InputGroup } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { createData, getAllData } from "../../../../Services/ProxyService";
import toast, { Toaster } from 'react-hot-toast';
import Footer from "../../Footer/Footer";
import SocialAuthButtons from "../../../TemplateAssets/authentication/SocialAuthButtons";
import { Divider } from '@mui/material';
import { Icon } from "@iconify/react";
import logo from '../../Projectimages/My Project white logo-01.png'

const UserLogin = ({ }) => {
  // State
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
    role: ''
  });
  console.log(formData)

  const history = useHistory();

  const handleChange = (e) => {
    const myData = { ...formData };
    myData[e.target.name] = e.target.value;
    setFormData(myData);
  }

  const Login = async (e) => {
    // e.preventDefault();
    const _userdetails = {
      email: formData.email,
      password: formData.password,
      role: "Owner"
    }
    await createData("login", _userdetails).then(async response => {
      console.log(response);
      await getAllData("admin/user/" + response.data._user._id).then(res => {
        sessionStorage.setItem('user', JSON.stringify(res.data.user));
      })
      toast.success('Successfully Logged In')
      sessionStorage.setItem("token", response.data.token);
      history.push("/dashboard/my-project");
      // if (formData.role == "Freelancer") {
      //   history.push("/Seller/Landing");
      // } else {
      //   history.push("/Project-owner/login/Landing");
      // }
    }).catch(err => {
      toast.error(err.response.data.message);
    })
  }

  // Handler
  const handleSubmit = e => {
    e.preventDefault();
    Login();
    // toast.success(`Logged in as ${formData.email}`, {
    //   theme: 'colored'
    // });
  };
  // 
  const [passwordVisible, setPasswordVisible] = useState(false);
  // Rest of your code...

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleFieldChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      <Row className="min-vh-100 bg-100">
        <Col lg={12} className="mb-5">
          <NavbarStandard />
        </Col>
        <Col lg={7} className="d-none d-lg-block position-relative">
          <div style={{ backgroundImage: `url(${worktops})`,width:'100%' }} className="bg-holder">
          </div>
        </Col>
        <Col lg={5} className="px-sm-0 align-self-center mx-auto py-5">
          <Container>
            <Row className="g-0 justify-content-center">
              <Col className="col-xxl-8">
                <Card>
                  <Card.Header style={{ background: '#003f6b' }} className="text-center p-2">
                    <Link to={'/'}>
                      <img src={logo} width="135px" />
                    </Link>
                  </Card.Header>
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <h2 className='mb-4'>Project Owner Login</h2>
                    </div>
                    <>
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                          <Form.Label className='text-700'>Email address<span className="text-danger ms-1">*</span></Form.Label>
                          <Form.Control
                            placeholder={'Email address'}
                            value={formData.email}
                            name="email"
                            onChange={handleFieldChange}
                            type="email"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label className="text-700">Password<span className="text-danger ms-1">*</span></Form.Label>
                          <div className="position-relative">
                            <Form.Control
                              placeholder="Password"
                              value={formData.password}
                              name="password"
                              onChange={handleFieldChange}
                              type={passwordVisible ? 'text' : 'password'}
                            />
                            {formData.password && (
                              <Icon
                                className="position-absolute me-2 cursor-pointer end-0 top-50 translate-middle-y"
                                icon="mdi:eye"
                                color="gray"
                                width="24"
                                height="24"
                                onClick={togglePasswordVisibility}
                              />
                            )}
                          </div>
                        </Form.Group>

                        <Row className="justify-content-between align-items-center">
                          <Col xs="auto">
                            <Form.Check type="checkbox" id="rememberMe" className="mb-0">
                              <Form.Check.Input
                                type="checkbox"
                                name="remember"
                                className="cursor-pointer"
                                checked={formData.remember}
                                onChange={e =>
                                  setFormData({
                                    ...formData,
                                    remember: e.target.checked
                                  })
                                }
                              />
                              <Form.Check.Label className="mb-0 text-700">
                                Remember me
                              </Form.Check.Label>
                            </Form.Check>
                          </Col>

                          <Col xs="auto">
                            <Link
                              className="fs--1 fw-semibold text-primary mb-0"
                              to='/user/forgetpassword'
                            >
                              Forgot Password?
                            </Link>
                          </Col>
                        </Row>

                        <Form.Group>
                          <Button
                            type="submit"
                            style={{ background: '#003f6b' }}
                            className="mt-3 w-100 border-0"
                            disabled={!formData.email || !formData.password}
                          >
                            Log in
                          </Button>
                        </Form.Group>
                      </Form>
                      <p class="text-center fs--1 text-900 mt-3 mb-3">
                        Don't Have an Account ?
                        <Link className="ms-1" to='/Project-owner/register'>
                          Create Account
                        </Link>
                      </p>
                      <Divider>Or Login With</Divider>
                      <SocialAuthButtons />
                      <Toaster />
                    </>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Col >
        <Col lg={12}>
          <Footer />
        </Col>
      </Row >
    </>
  );
};
export default UserLogin;

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#1360EF" fillOpacity="1" d="M0,224L80,229.3C160,235,320,245,480,224C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
            <div className="footer-inner">
                <Container className="mx-auto">
                    <Row className="justify-content-center">
                        <Col>
                            <div className="footer-card mx-auto">
                                <div>
                                    <h3>Newsletter</h3>
                                    <p className="my-2 fw-bold">Subscribe Our Newsletter</p>
                                    <input type="text" className="form-control p-2" placeholder="Email address" aria-label="Email address" />
                                    <button className="btn btn-outline-light w-100 p-2 mt-3">Submit</button>
                                    <small>
                                        Get started for 1 Month free trial No Purchace required.
                                    </small>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="text-center">
                                <div>
                                    <ul className="footer-nav">
                                        <li><NavLink to='/home'>Home</NavLink></li>
                                        <li><NavLink to='/services'>Services</NavLink></li>
                                        <li><NavLink to='/about'>About</NavLink></li>
                                        <li><NavLink to='/contact'>Contact</NavLink></li>
                                    </ul>
                                </div>
                                <div className="footer-icon">
                                    <i className="fab fa-twitter"></i>&nbsp;&nbsp;
                                    <i className="fab fa-facebook"></i>&nbsp;&nbsp;
                                    <i className="fab fa-github"></i>
                                </div>
                                <div className="Footer-logo mx-auto">
                                    <img src="./logo.png" alt="logo" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="text-center mt-5">
                                <hr />
                                <p className="py-3">&copy;All right reserved by DevCourse, 2021</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;
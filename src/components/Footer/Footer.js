import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1360EF" fill-opacity="1" d="M0,64L48,53.3C96,43,192,21,288,37.3C384,53,480,107,576,112C672,117,768,75,864,74.7C960,75,1056,117,1152,138.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            <div className="footer-inner">
                <Container className="mx-auto">
                    <Row className="justify-content-center">
                        <Col>
                            <div className="footer-card mx-auto">
                                <div>
                                    <h3>Newsletter</h3>
                                    <p className="my-2 fw-bold text-light">Subscribe Our Newsletter</p>
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
                                    <a target="_blank" rel="noreferrer" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>&nbsp;&nbsp;
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/JhankarMahbub"><i className="fab fa-facebook"></i></a>&nbsp;&nbsp;
                                    <a target="_blank" rel="noreferrer" href="https://github.com/mdibuhossain"><i className="fab fa-github"></i></a>
                                </div>
                                <div className="Footer-logo mx-auto">
                                    <img src="./logo.png" alt="logo" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="text-center mt-5">
                                <hr />
                                <p className="py-3 text-light">&copy;All right reserved by DevCourse, 2021</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact mt-5">
            <h1 className="text-center mb-5">Contact Us</h1>
            <Container className="mx-auto text-center">
                <Row className="gy-5 my-5">
                    <Col md={4}>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <svg className="feather feather-map-pin" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#1360ef" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <h4>Address:</h4>
                            <span>423B, Road Wordwide Country, USA</span>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <svg className="feather feather-mail" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#1360EF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            <h4>Email:</h4>
                            <span className="special-text">ibuhossain3@gmail.com</span>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <svg className="feather feather-phone-call" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#1360ef" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <h4>Phone Number:</h4>
                            <span className="special-text">+88-234-567-8900</span>
                        </div>
                    </Col>
                </Row>
                <div>
                    <h3>Drop A Line</h3>
                    <p>Get in touch and let us know how we can help. Fill out the form and we’ll be in touch as soon as possible.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <form className="row g-3">
                            <div className="col-12">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" className="form-control" placeholder="Email Address" aria-label="Email Address" />
                                    </div>
                                    <div className="col-12">
                                        <input type="number" className="form-control" placeholder="Phone" aria-label="Phone" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a messages here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                <label className="text-secondary mx-2" htmlFor="floatingTextarea2">Messages</label>
                            </div>
                            <div className="col-12 text-center">
                                <button className="btn btn-primary">Send Messages</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
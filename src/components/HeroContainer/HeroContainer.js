import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import heroImg from '../../images/hero.jpg';


const HeroContainer = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col md={6} xs={12}>
                    <img className="img-fluid" src={heroImg} alt="hero img" />
                </Col>
                <Col md={6} xs={12} className="d-flex flex-column justify-content-center align-item-center">
                    <div className="w-75">
                        <h1>Learn a new skill</h1>
                        <p>Build skills with DevCourse, certificates, and degrees online from world-class universities and companies.</p>
                        <Row>
                            <Col>
                                <h1 className="text-primary">168K</h1>
                                <p>Online Courses</p>
                            </Col>
                            <Col>
                                <h1 className="text-primary">384K</h1>
                                <p>Students</p>
                            </Col>
                        </Row>
                        <NavLink to="/services"><button className="btn btn-primary">Enroll now</button></NavLink>
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default HeroContainer;
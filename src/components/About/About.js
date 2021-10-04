import React from 'react';
import './About.css';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-container">
            <Container className="about">
                <Row>
                    <Col>
                        <img className="img-fluid" src="https://resumegenius.com/wp-content/uploads/resume-soft-skills-hero.png" alt="hero img" />
                    </Col>
                    <Col className="d-flex flex-column justify-content-center">
                        <div className="w-75">
                            <h1>Take the next step toward your personal and professional goals with DevCourse.</h1>
                            <p>We’ve got the solution: world-class training and development programs developed by top universities and companies. All on DevCourse for Business.</p>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div>
    );
};

export default About;
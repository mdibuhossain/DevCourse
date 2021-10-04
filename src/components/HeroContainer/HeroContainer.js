import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import heroImg from '../../images/hero.jpg';


const HeroContainer = () => {
    return (
        <Container  className="my-5">
            <Row>
                <Col>
                    <img className="img-fluid" src={heroImg} alt="hero img" />
                </Col>
                <Col className="d-flex flex-column justify-content-center">
                    <div className="w-75">
                        <h1>Learn a new skill</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem suscipit reiciendis consequuntur ducimus dicta, nulla doloribus blanditiis beatae ut consectetur quidem provident architecto impedit fuga qui consequatur asperiores ipsum magni.</p>
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
                    </div>
                    <NavLink to="/services"><button className="btn btn-primary">Enroll now</button></NavLink>
                </Col>
            </Row>
        </Container >
    );
};

export default HeroContainer;
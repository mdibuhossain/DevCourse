import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './MainHero.css';
import mainHeroImg from '../../images/mainHero.png';

const MainHero = () => {
    return (
        <Container className="my-5">
            <Row className="align-items-center justify-content-center flex-column-reverse flex-lg-row">
                <Col lg={6} sm={12}>
                    <div>
                        <h1>For <span className="special-text">every student</span>,
                            every classroom.
                            Real results.</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam architecto rerum beatae alias? Repellat non tenetur odit quos perspiciatis voluptatum ipsam? Id, nulla officiis.</p>
                    </div>
                </Col>
                <Col lg={6} sm={12}>
                    <img className="w-100" src={mainHeroImg} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default MainHero;
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
                        <p>There is no end to education. It is not that you read a book, pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die, is a process of learning.</p>
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
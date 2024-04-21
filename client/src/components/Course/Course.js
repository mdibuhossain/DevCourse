import React from 'react';
import './Course.css';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const users = <FontAwesomeIcon icon={faUserFriends} />;
const clock = <FontAwesomeIcon icon={faClock} />;

const Course = (props) => {
    const { name, about, duration, fee, picture, student } = props.service;
    return (
        <>
            <div className="card-style">
                <Card>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{about}</Card.Text>
                        <div className="d-flex justify-content-between">
                            <span className="border bg-light px-3 py-1 rounded">{fee}</span>
                            <button className="special-bg text-white px-3 py-1 border-0 rounded">Enroll</button>
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col><small className="text-muted">{users}&nbsp;&nbsp;{student}</small></Col>
                            <Col><small className="text-muted">{clock}&nbsp;&nbsp;{duration} hours</small></Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </div>
        </>
    );
};

export default Course;
import React, { useEffect, useState } from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import Course from '../Course/Course';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <Container className="my-5">
            <div className="d-flex flex-wrap justify-content-center">
                {
                    services.map(service => <Course key={service._id} service={service} />)
                }
            </div>
        </Container>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
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
            <h1 className="text-center mb-5">All Courses</h1>
            <div className="d-flex flex-wrap justify-content-center">
                {
                    services.map(service => <Course key={service._id} service={service} />)
                }
            </div>
        </Container>
    );
};

export default Services;
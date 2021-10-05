import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Course from '../Course/Course';

const DisplayService = () => {
    const [services, setServices] = useState([]);
    const tmpCourse = [];
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => {
                for (let i = 0; i < 4; i++)
                    tmpCourse.push(data[i]);
                setServices(tmpCourse);
            });
    }, []);
    return (
        <Container className="my-5">
            <div className="text-center">
                <h1>Popular courses this month</h1>
                <p>Break into a new field like information technology or data science. No prior experience necessary to get started.</p>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {
                    services.map(service => <Course key={service._id} service={service} />)
                }
            </div>
        </Container>
    );
};

export default DisplayService;
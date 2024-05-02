import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Course from '../Course/Course';
import PageLayout from '../../pages/PageLayout';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <PageLayout>
            <Container className="my-5">
                <div className="text-center mb-5">
                    <h1>All Courses</h1>
                    <span>Over 4,000 courses in topics like business analytics, graphic design, Python, and more.</span>
                </div>
                <div className="d-flex flex-wrap justify-content-sm-around justify-content-center">
                    {
                        services.map(service => <Course key={service._id} service={service} />)
                    }
                </div>
            </Container>
        </PageLayout>
    );
};

export default Services;
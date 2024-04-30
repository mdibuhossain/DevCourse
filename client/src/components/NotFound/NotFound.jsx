import React from 'react';
import './NotFound.css';
import img404 from '../../images/404.jpg';
import { NavLink } from 'react-router-dom';
import PageLayout from '../../pages/dashboard/PageLayout';

const NotFound = () => {
    return (
        <PageLayout>
            <div className="notFound-container">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto text-center">
                        <img className="w-100" src={img404} alt="404 not found" />
                    </div>
                </div>
                <div className="text-center">
                    <NavLink to="/"><button className="btn special-bg fs-4 text-light fw-bold">Return</button></NavLink>
                </div>
            </div>
        </PageLayout>
    );
};

export default NotFound;
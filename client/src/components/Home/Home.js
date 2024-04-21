import React from 'react';
import './Home.css';
import DisplayService from '../DisplayService/DisplayService';
import MiddleHero from '../MiddleHero/MiddleHero';
import MainHero from '../MainHero/MainHero';

const Home = () => {
    return (
        <div>
            <MainHero />
            <MiddleHero />
            <DisplayService />
        </div>
    );
};

export default Home;
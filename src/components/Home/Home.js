import React from 'react';
import './Home.css';
import DisplayService from '../DisplayService/DisplayService';
import HeroContainer from '../HeroContainer/HeroContainer';

const Home = () => {
    return (
        <div>
            <HeroContainer />
            <DisplayService />
        </div>
    );
};

export default Home;
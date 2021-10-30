import React from 'react';
import Header from '../Shared/Header/Header';
import About from './About/About';
import Destination from './Destination/Destination';


const Home = () => {
    return (
        <div>
        <Header/>
        <About/>
        <Destination></Destination>
        </div>
    );
};

export default Home;
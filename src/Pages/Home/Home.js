import React from 'react';
import Header from '../Shared/Header/Header';
import About from './About/About';
import Adventure from './Adventure/Adventure';
import CustomerSupport from './CustomerSupport/CustomerSupport';
import Destination from './Destination/Destination';
import Success from './Success/Success';


const Home = () => {
    return (
        <div>
        <Header/>
        <Success/>
        <About/>
        <Destination></Destination>
        <Adventure></Adventure>
        <CustomerSupport></CustomerSupport>
        </div>
    );
};

export default Home;
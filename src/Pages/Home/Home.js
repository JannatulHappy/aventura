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
        <CustomerSupport></CustomerSupport>
        <Adventure></Adventure>
        
        </div>
    );
};

export default Home;
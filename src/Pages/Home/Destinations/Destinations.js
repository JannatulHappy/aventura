import React from 'react';
import  './Destinations.css'
import Menubar from '../../Shared/Header/Menubar/Menubar';
import Destination from '../Destination/Destination';

const Destinations = () => {
    return (
        <div>
            <Menubar/>
            <div className=" row destination-banner">
            <p className="title ">Start Your Next Adventure</p>
            <span className="sub-title mb-5">Take a 360-degree tour of some of the country’s most compelling natural wonders and cultural attractions right here.</span>
            
            </div>
            <Destination></Destination>
        </div>
    );
};

export default Destinations;
import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="row container mx-auto banner-container">
        <div className="col-lg-6 col-md-12 col-12  banner-left mt-5 mb-3">
          <p className="mt-5">
            <span className="sub-title">
              LIFE'S A JOURNEY, TAKE YOUR DREAM
            </span>
          </p>
          <h1 className="title mt-3 mb-4">Spooktacular Adventures</h1>
          <h5 className=" bottom-text mt-4 fw-medium">No tricks, just lots of treats!</h5>
          <div className="btn-container row ">
            <div className="btn col-lg-6 col-md-6 col-12">
              <button className="btn avantura-btn">Italy</button>
              <button className="btn avantura-btn">Iceland</button>
              <button className="btn avantura-btn">Egypt</button>
            </div>
            <div className="btn col-lg-6 col-md-6 col-12">
              <button className="btn avantura-btn">England</button>
              <button className="btn avantura-btn">Turkey</button>
              <button className="btn avantura-btn">Greece</button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12"></div>
      </div>
    );
};

export default Banner;
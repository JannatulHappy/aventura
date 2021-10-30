import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about-container">
      <div className="row about container my-5 mx-auto">
        <div className="col-md-12 col-lg-6 pe-5 col-12 about-left">
          <p>THE WORLD IS YOURS</p>
          <hr className="hr" />
          <h1 className="about-title my-4">Learn More About Aventura</h1>
          <h3 className="about-sub-title my-4">
            EXPLORE OUR ECO AND ADVENTURE TRAVEL ITINERARIES!
          </h3>
         <p>After the long, dreary winter we just had, filled with dark days and frigid temps, we all deserve a vacation of some sort. This could mean jet-setting someplace breathtakingly beautiful—making your Instagram stories the thing to watch—or just escaping to somewhere close by for a relaxing getaway.None of this would be quite like paradise, <br/> however, if you find yourself in these less-than-ideal situations: losing your passport, dealing with broken luggage, or even finding yourself stranded somewhere dangerous with a dead phone.</p>
        </div>

        <div className="col-md-12 col-lg-6 my-4 col-12 ps-5 about-right">
          <img
            src="https://cdn.tourradar.com/s3/tour/1500x800/212974_6011422b532c3.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;

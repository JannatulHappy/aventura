import React, { useEffect, useState } from "react";
import "./Destination.css";
import SingleDestination from "./SingleDestination/SingleDestination";
const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch("https://secure-hamlet-63845.herokuapp.com/allDestinations")
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);

  return (
    <div className="destinations">
      <div className="row destination-container my-5">
        <p className="title">FEATURED TOURS</p>
        <hr className="hr" />
        <p className="sub-title mt-2">
          Discover the highlights of travelling and find ideas for your holidays
          with these stories.
        </p>
        <div className="row g-4 destination">
          {destinations.slice(0, 8).map((destination) => (
            <SingleDestination
              destination={destination}
              key={destination._id}
            ></SingleDestination>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;

import React from "react";
import SearchFlight from "../Search/SearchFlight.js";
import Navbar from "../layout/Navbar"

const Landing = () => {
  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              Ready for your next adventure?
            </h4>
            <p className="flow-text white-text text-lighten-1">
              Sign-up or Login to unlock all the features.
            </p>
            <br />
          </div>
          <SearchFlight />
        </div>
      </div>
    </div>
  );
};

export default Landing;

import React from "react";
import SearchFlight from "../Search/SearchFlight.js";
import Logout2 from "../layout/Logout2"


const Flights = () => {
    return (
        <div>
            <Logout2 />
            <div className="container valign-wrapper">
                <div className="row">
                    <div className="row">
                        <div className="col s12 center-align">
                            <h4>
                                Ready for your next adventure? 
                </h4>
                            <p className="flow-text white-text text-lighten-1">
                                Let's start by booking your flight.
                </p>
                            <br />
                        </div>
                    </div>
                    <SearchFlight />
                </div>
            </div>
        </div>

    );
};

export default Flights;

import React from "react";
import { Link } from "react-router-dom";
import SearchFlight from "../Search/SearchFlight.js";


const Flights = () => {
    return (
        <div style={{ height: "75vh" }} className="container valign-wrapper">
            <div className="row">
                <div className="col s12 center-align">
                    <h4>
                        <span style={{ fontFamily: "monospace" }}>TRAVEL APP</span> BOOK IT AND GO, CATCH YOU OUTSIDE HOWBOUT THAT!
            </h4>
                    <p className="flow-text grey-text text-darken-1">
                        A freaking cool tool to book your travel for your next trip !!!
            </p>
                    <br />
                </div>
                <SearchFlight />
            </div>
        </div>
    );
};

export default Flights;

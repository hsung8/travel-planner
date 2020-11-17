import React from "react";
import SearchRentalCar from "../Search/SearchRentalCar.js";
import Logout2 from "../layout/Logout2"

const Rental = () => {
    return (
        <div>
            <Logout2 />
            <div className="container valign-wrapper">
                <div className="row">
                    <div className="row">
                        <div className="col s12 center-align">
                            <h4>
                                BOOK IT AND GO, CATCH YOU OUTSIDE HOWBOUT THAT!
                </h4>
                            <p className="flow-text white-text text-lighten-1">
                                A freaking cool tool to book your travel for your next trip !!!
                </p>
                            <br />
                        </div>
                    </div>
                    <SearchRentalCar />
                </div>
            </div>
        </div>

    );
};

export default Rental;

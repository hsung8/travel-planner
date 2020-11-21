import React from "react";
import SearchHotel from "../Search/SearchHotel.js";
import Logout2 from "../layout/Logout2"

const Hotel = () => {
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
                                Book your next hotel around the area of your next travel spot!
              </p>
                            <br />
                        </div>
                    </div>
                    <SearchHotel />
                </div>
            </div>
        </div>


    );
};

export default Hotel;

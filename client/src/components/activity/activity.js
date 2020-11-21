import React from "react";
import SearchActivity from "../Search/SearchActivity.js";
import Logout2 from "../layout/Logout2"

const Activity = () => {
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
                                Search for activities going on around town!
                </p>
                            <br />
                        </div>
                    </div>
                    <SearchActivity />
                </div>
            </div>
        </div>
    );
};

export default Activity;

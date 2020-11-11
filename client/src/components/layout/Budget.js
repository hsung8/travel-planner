import React, { Component } from "react";
import { Link } from "react-router-dom";

class Budget extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s3 center-align">
                    <div style={{ width: "100%" }} className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content">
                                <button>BUDGET</button><br />
                                <button>HOTELS</button><br />
                                <button>FLIGHTS</button><br />
                                <button>RENTAL CARS</button><br />
                                <button>ACTIVITIES</button><br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s9 center-align">
                    <div style={{ width: "100%" }} className="card horizontal">
                        <div className="card-stacked">
                            <div style={{ height: "75vh" }} className="card-content">
                                <b>Budget card</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Budget;
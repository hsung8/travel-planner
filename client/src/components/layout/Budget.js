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
                            <Link
                                to="/budget"
                                className="btn btn-large hoverable purple accent-3"
                                style={{
                                    marginBottom: 10,
                                    width: "200px"
                                }}
                            >BUDGET</Link><br />
                                <Link
                                to="/hotel"
                                className="btn btn-large hoverable green accent-3"
                                style={{
                                    marginBottom: 10,
                                    width: "200px"
                                }}
                            >HOTELS</Link><br />
                            <Link to="/flights"
                                className="btn btn-large hoverable blue accent-3"
                                style={{
                                    marginBottom: 10,
                                    width: "200px"
                                }}
                            >FLIGHTS</Link><br />
                            <Link to="/rental"
                                className="btn btn-large hoverable black accent-3"
                                style={{
                                    marginBottom: 10,
                                    width: "200px"
                                }}
                            >RENTAL CARS</Link><br />
                            <Link to="/activity"
                                className="btn btn-large hoverable orange accent-3"
                                style={{
                                    marginBottom: 10,
                                    width: "200px"
                                }}
                            >ACTIVITIES</Link><br />
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
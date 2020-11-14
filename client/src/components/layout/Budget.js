import React, { Component } from "react";
import { Link } from "react-router-dom";
import Piechart from "../layout/Piechart";

class Budget extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m12 l3 center-align">
                    <div style={{ width: "100%" }} className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content">
                            <Link
                                to="/budget"
                                className="btn btn-large hoverable purple accent-3"
                                style={{
                                    marginBottom: 10,
                                    width: "100%"
                                }}
                            >BUDGET</Link><br />
                                <Link
                                to="/hotel"
                                className="btn btn-large hoverable green accent-3"
                                style={{
                                    marginBottom: 10,
                                    width: "100%"
                                }}
                            >HOTELS</Link><br />
                            <Link to="/flights"
                                className="btn btn-large hoverable blue accent-3"
                                style={{
                                    marginBottom: 10,
                                    width: "100%"
                                }}
                            >FLIGHTS</Link><br />
                            <Link to="/rental"
                                className="btn btn-large hoverable black accent-3"
                                style={{
                                    marginBottom: 10,
                                    width: "100%"
                                }}
                            >RENTAL CARS</Link><br />
                            <Link to="/activity"
                                className="btn btn-large hoverable orange accent-3"
                                style={{
                                    marginBottom: 10,
                                    width: "100%"
                                }}
                            >ACTIVITIES</Link><br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l9 center-align">
                    <div style={{ width: "100%" }} className="card horizontal">
                        <div className="card-stacked">
                            <div style={{ height: "75vh" }} className="card-content">
                                <div className="col s4 center-align">
                                    <h6>Your goal: </h6>
                                    <h4>2,000 USD </h4>
                                    < br />

                                    <h6>Your estimates: </h6>
                                    <h4>1,800 USD </h4>
                                </div>
                                <div className="col s8 center-align">
                                    <Piechart />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Budget;
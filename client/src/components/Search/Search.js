import React, { Component } from "react";
import { Link } from "react-router-dom";

class Search extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 center-align">
                    <div className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content">
                                <button href="/hotel">HOTELS</button>
                                <button href="/flights">FLIGHTS</button>
                                <button href="/rental">RENTAL CARS</button>
                                <button href="/activity">ACTIVITIES</button>
                                <br />
                                <input placeholder="Start your Adventure Here"></input>
                                <button className="Search btn-large waves-effect waves-light hoverable blue accent-3">
                                    <a href="#">Search</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;

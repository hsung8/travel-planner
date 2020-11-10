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
                                <button href="#">HOTELS</button>
                                <button href="#">FLIGHTS</button>
                                <button href="#">RENTAL CARS</button>
                                <button href="#">ACTIVITIES</button>
                                <br />
                                <input placeholder="Start your Adventure Here"></input>
                                <button className="Search">
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchHotel = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    return (
        <div className="row">
            <div className="col s12 center-align">
                <div className="card horizontal">
                    <div className="card-stacked">
                        <div className="card-content">
                           <Link
                                to="/hotel"
                                className="btn btn-large hoverable green accent-3"
                                style={{
                                    marginRight: 10
                                }}
                            >HOTELS</Link>
                            <Link to="/flights"
                                className="btn btn-large hoverable blue accent-3"
                                style={{
                                    marginRight: 10
                                }}
                            >FLIGHTS</Link>
                            <Link to="/rental"
                                className="btn btn-large hoverable black accent-3"
                                style={{
                                    marginRight: 10
                                }}
                            >RENTAL CARS</Link>
                            <Link to="/activity"
                                className="btn btn-large hoverable orange accent-3"
                                style={{
                                    marginRight: 10
                                }}
                            >ACTIVITIES</Link>
                            <br />
                            <input className="destination" placeholder="Where is your adventure taking you?"></input>
                            <br />
                            <DatePicker
                            className="startDate" timeInputLabel="When do you want this adventure to start?" selected={startDate} onChnage={date => setStartDate(date)} />
                            <br />
                            <DatePicker className="endDate" timeInputLabel="When do you want this adventure to start?" selected={endDate} onChnage={date => setEndDate(date)} />
                            <br />
                            <Link
                                to=""
                                className="Search btn btn-large hoverable blue accent-3">
                                Search</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchHotel;

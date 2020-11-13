import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Search = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    return (
        <div className="row">
            <div className="col s12 center-align">
                <div className="card horizontal searchBox">
                    <div className="card-stacked">
                        <div className="card-content">
                            <Link
                                to="/hotel"
                                className="btn btn-large hoverable accent-3"
                                style={{
                                    marginRight: 10,
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem",
                                    marginBottom: "1rem",
                                    background: "#f9bc60",
                                    color: "#001e1d"
                                }}
                            >HOTELS</Link>
                            <Link to="/flights"
                                className="btn btn-large hoverable  accent-3"
                                style={{
                                    marginRight: 10,
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem",
                                    marginBottom: "1rem",
                                    background: "#f9bc60",
                                    color: "#001e1d"
                                }}
                            >FLIGHTS</Link>
                            <Link to="/rental"
                                className="btn btn-large hoverable accent-3"
                                style={{
                                    marginRight: 10,
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: ".5px",
                                    marginTop: "1rem",
                                    marginBottom: "1rem",
                                    background: "#f9bc60",
                                    color: "#001e1d"
                                }}
                            >RENTALCARS</Link>
                            <Link to="/activity"
                                className="btn btn-large hoverable accent-3"
                                style={{
                                    marginRight: 10,
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem",
                                    marginBottom: "1rem",
                                    background: "#f9bc60",
                                    color: "#001e1d"
                                }}
                            >ACTIVITIES</Link>
                            <br />
                            <input className="destination" placeholder="Where is your adventure taking you?"></input>
                            <input className="origin" placeholder="Where are you coming from?"></input>
                            <br />
                            <h1>Outbound</h1>
                            <DatePicker style={{
                                


                            }}
                            
                                className="startDate" timeInputLabel="When do you want this adventure to start?" selected={startDate} onChange={date => setStartDate(date)} />
                            <br />
                            <h1>Return</h1>
                            <DatePicker className="endDate" timeInputLabel="When do you want this adventure to start?" selected={endDate} onChange={date => setEndDate(date)} />
                            <br />
                            <Link style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem",
                                paddingBottom: "1rem",
                                background: "#f9bc60",
                                color: "#001e1d"
                            }}
                                to=""
                                className="Search btn btn-large hoverable accent-3">
                                Search</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;

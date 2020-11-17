import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchRentalCar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const options = [
        { value: "economy", label: "Economy" },
        { value: "compact", label: "Compact" },
        { value: "mid-size", label: "Mid-Size" },
        { value: "full-size", label: "Full-Size" },
        { value: "premium", label: "Premium" },
        { value: "luxury", label: "Luxury" },
        { value: "minivan", label: "Minivan" },
        { value: "convertible", label: "Convertible" },
        { value: "mid-size SUV", label: "Mid-Size SUV" },
        { value: "standard SUV", label: "Standard SUV" },
        { value: "full-size SUV", label: "Full-Size SUV" }
    ];
    const timeOptions = [
        { value: "06", label: "6:00 AM" },
        { value: "07", label: "7:00 AM" },
        { value: "08", label: "8:00 AM" },
        { value: "09", label: "9:00 AM" },
        { value: "10", label: "10:00 AM" },
        { value: "11", label: "11:00 AM" },
        { value: "12", label: "12:00 PM" },
        { value: "13", label: "1:00 PM" },
        { value: "14", label: "2:00 PM" },
        { value: "15", label: "3:00 PM" },
        { value: "16", label: "4:00 PM" },
        { value: "17", label: "5:00 PM" },
        { value: "18", label: "6:00 PM" }

    ]
    return (
        <div className="row">
            <div className="col s12 center-align">
                <div className="card horizontal">
                    <div className="card-stacked">
                        <div className="card-content">
                            <Link
                                to="/hotel"
                                className="btn btn-large hoverable accent-3"
                                style={{
                                    marginRight: 10,
                                    background: "#f9bc60",
                                    color: "#001e1d",
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
                                className="btn btn-large hoverable accent-3"
                                style={{
                                    marginRight: 10,
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
                            <input className="pickUp" placeholder="What is your pick-up location?"></input>
                            <label> What type of vehicle do you want?</label>
                            <Select options={options} />
                            <br />
                            <label style={{ alignSelf: "left" }}> What day do you want to start your rental?
                            <DatePicker
                                    className="startDate" timeInputLabel="When is your pick-up date?" selected={startDate} onChange={date => setStartDate(date)} />
                            </label>
                            <br />
                            <label> What time do you want to pick up the vehicle?</label>
                            <Select options={timeOptions} />
                            <br />
                            <label> What day do you want to end your rental?</label>
                            <DatePicker className="endDate" timeInputLabel="When do you want to return the car?" selected={endDate} onChange={date => setEndDate(date)} />
                            <br />
                            <label> What time do you want to drop off the vehicle?</label>
                            <Select options={timeOptions} />
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

export default SearchRentalCar;

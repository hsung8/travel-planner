import React, { useState, useContext,useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { AmadeusProvider, AmadeusContext } from "../../utils/AmadeusProvider";
import amadeus from '../../utils/AmadeusProvider'


const SearchFlight = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const options = [
        { value: "ECONOMY", label: "Economy" },
        { value: "PREMIUM_ECONOMY", label: "Premium Economy" },
        { value: "BUSINESS", label: "Business" },
        { value: "FIRST", label: "First" }
    ]
    const [destination, setDestination] = useState({ destination: "" });
    const [origin, setOrigin] = useState({ origin: "" });
    // const { refreshToken, getIATACode, getFlights } = useContext(AmadeusProvider)

    useEffect(() => {
        amadeus.shopping.flightOffersSearch.get({
            originLocationCode: 'SYD',
            destinationLocationCode: 'BKK',
            departureDate: '2020-12-01',
            adults: '2',
            currencyCode: "USD",
            max: 10,
            travelClass: "ECONOMY"
        }).then(function(response){
          console.log(response.data);
        }).catch(function(responseError){
          console.log(responseError.code);
        });
    
    }, [])

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
                            <form >

                                <input name="destination" className="destination" placeholder="Where is your adventure taking you?"></input>
                                <input name="origin" className="origin" placeholder="Where are you coming from?"></input>
                            </form>
                            <br />
                            <form style = {{display: "none"}}>

                                <input className="adults" placeholder="How many adults will be traveling?"></input>
                                <input className="adults" placeholder="How many children will be traveling?"></input>
                                <br />
                                <label>
                                    Which class would you like to fly in?
                                <Select options={options} />
                                </label>
                                <DatePicker
                                    className="startDate" timeInputLabel="When do you want this adventure to start?" selected={startDate} onChange={date => setStartDate(date)} />
                                <br />
                                <DatePicker className="endDate" timeInputLabel="When do you want this adventure to start?" selected={endDate} onChange={date => setEndDate(date)} />
                                <br />
                            </form>
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

export default SearchFlight;

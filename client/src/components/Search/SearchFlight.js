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
    const travelClass = [
        { value: "ECONOMY", label: "Economy" },
        { value: "PREMIUM_ECONOMY", label: "Premium Economy" },
        { value: "BUSINESS", label: "Business" },
        { value: "FIRST", label: "First" }
    ]
    const [destination, setDestination] = useState({ destination: "" });
    const [origin, setOrigin] = useState({ origin: "" });
    const [adults, setAdults] = useState({ adults: 1 })
    const [children, setChildren] = useState({ children: 0 })


    const handleFlightSubmit = event => {
        event.preventDefault();  
    }
        
        useEffect(() => {
            amadeus.shopping.flightOffersSearch.get({
                originLocationCode: {origin},
                destinationLocationCode: {destination},
                departureDate: {startDate},
                returnDate: {endDate},
                adults: {adults},
                children: {children},
                currencyCode: "USD",
                max: 5,
                travelClass: {travelClass}
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

                                <input name="origin" className="origin" placeholder="Where from?" onChange={origin => setOrigin(origin)}></input>
                                <input name="destination" className="destination" placeholder="Where to?" onChange={destination => setDestination(destination)}></input>
                            </form>
                            <br />
                            <form style = {{display: "none"}}>

                                <input value= {adults} className="adults" placeholder="How many adults will be traveling?" onChange={adults => setAdults(adults)}></input>
                                <input value= {children} className="children" placeholder="How many children will be traveling?" onChange={children => setChildren(children)}></input>
                                <br />
                                <label>
                                    Which class would you like to fly in?
                                <Select value= {travelClass} options={travelClass} />
                                </label>
                                <DatePicker value= {startDate}
                                    className="startDate" timeInputLabel="When do you want this adventure to start?" selected={startDate} onChange={date => setStartDate(date)} />
                                <br />
                                <DatePicker value= {endDate} className="endDate" timeInputLabel="When do you want this adventure to start?" selected={endDate} onChange={date => setEndDate(date)} />
                                <br />
                            </form>
                            <Link onClick= {handleFlightSubmit} style={{
                              
                                letterSpacing: "1.5px",
                                marginTop: "1rem",
                            }}
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

export default SearchFlight;

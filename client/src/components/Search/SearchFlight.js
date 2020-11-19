import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addFlightToMongo } from "../../actions/flightAction";
import "react-datepicker/dist/react-datepicker.css";
const moment = require("moment");
// import { AmadeusProvider, AmadeusContext } from "../../utils/AmadeusProvider";
// import amadeus from '../../utils/AmadeusProvider'
const Amadeus = require("amadeus");
const amadeus = new Amadeus({
    clientId: "HikDALzxHh0L6AaJXVTRTdxknMs0ItsR",
    clientSecret: "mhpcNiCqSY1olTPP",
});

const SearchFlight = (props) => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [flightsState, setFlightsState] = useState([])

    const travelClass = [
        { value: "ECONOMY", label: "Economy" },
        { value: "PREMIUM_ECONOMY", label: "Premium Economy" },
        { value: "BUSINESS", label: "Business" },
        { value: "FIRST", label: "First" }
    ]


    const [inputs, setInputs] = useState({})
    const [showAdditionalFlightInformation, setShowAdditionalFlightInformation] = useState(false)


    const handleOriginDestinationSubmit = async event => {
        event.preventDefault();
        console.log(inputs);
        //get iata code for origin
        const originIataCode = await amadeus.referenceData.locations
            .get({
                keyword: inputs.origin,
                subType: "CITY",

            })
        console.log(originIataCode.data[0].iataCode);

        let clone = inputs
        clone.originIataCode = originIataCode.data[0].iataCode
        setInputs(clone)



        //get iata code for destination
        const destinationIataCode = await amadeus.referenceData.locations
            .get({
                keyword: inputs.destination,
                subType: "CITY",

            })
        console.log(destinationIataCode.data[0].iataCode);

        let clone2 = inputs
        clone2.destinationIataCode = destinationIataCode.data[0].iataCode
        setInputs(clone2)
        setShowAdditionalFlightInformation(true)

    }

    const handleInputs = (e) => {
        const { name, value } = e.target
        const clone = inputs
        clone[name] = value
        setInputs(clone)
    }
    const handleClassChange = selectedOption => {
        // this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        const clone = inputs;
        clone.travelClass = selectedOption.value;
        setInputs(clone)
    };

    const flightSearchSubmit = async event => {
        event.preventDefault();
        // get data from inputs for flight search
        const flights = await amadeus.shopping.flightOffersSearch
            .get({
                originLocationCode: inputs.originIataCode,
                destinationLocationCode: inputs.destinationIataCode,
                departureDate: startDate.toISOString().split('T')[0],
                returnDate: endDate.toISOString().split('T')[0],
                adults: inputs.adults,
                children: inputs.children,
                currencyCode: "USD",
                max: 5,
                travelClass: inputs.travelClass
            })

        setFlightsState(flights.data);

        console.log(flights.data)

    }
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
                            {/* <Link to="/rental"
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
                            >RENTALCARS</Link> */}
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
                            <form onSubmit={handleOriginDestinationSubmit}>

                                <input required name="origin" className="origin" placeholder="Where from?" onChange={handleInputs}></input>
                                <input required name="destination" className="destination" placeholder="Where to?" onChange={handleInputs}></input>
                                <button style={{

                                    letterSpacing: "1.5px",
                                    marginTop: "1rem",
                                    background: "#090088"
                                }}

                                    className="Search btn btn-large hoverable accent-3">
                                    Search</button>
                            </form>
                            <br />
                            <form onSubmit={flightSearchSubmit} style={{ display: showAdditionalFlightInformation ? "block" : "none" }}>

                                <input required type="number" name="adults" className="adults" placeholder="How many adults will be traveling?" onChange={handleInputs}></input>
                                <input required type="number" name="children" className="children" placeholder="How many children will be traveling?" onChange={handleInputs}></input>
                                <br />
                                <label>
                                    Which class would you like to fly in?
                                <Select required name="travelClass" options={travelClass} onChange={handleClassChange} />
                                </label>
                                <DatePicker name="startDate" required
                                    className="startDate" timeInputLabel="When do you want this adventure to start?" selected={startDate} onChange={date => setStartDate(date)} />
                                <br />
                                <DatePicker name="endDate"
                                    className="endDate" timeInputLabel="When do you want this adventure to start?" selected={endDate} onChange={date => setEndDate(date)} />
                                <br />

                                <button style={{

                                    letterSpacing: "1.5px",
                                    marginTop: "1rem",
                                    marginBottom: "2px",
                                    background: "#090088"

                                }}

                                    className="Search btn btn-large hoverable accent-3">
                                    Search</button>
                            </form>
                        </div>
                    </div>
                </div>

                {flightsState.map((flight, i) => {
                    let airlineName = flight.itineraries[0].segments[0].carrierCode
                    if (airlineName === "B6") {
                        airlineName = "JetBlue"
                    } else if (airlineName === "DL") {
                        airlineName = "Delta Airlines"
                    } else if (airlineName === "AA") {
                        airlineName = "American Airlines"
                    } else if (airlineName === "NW") {
                        airlineName = "Northwest Airlines"
                    } else if (airlineName === "UA") {
                        airlineName = "United Airlines"
                    } else if (airlineName === "US") {
                        airlineName = "United Airways"
                    } else if (airlineName === "WN") {
                        airlineName = "Southwest Airlines"
                    } else if (airlineName === "FL") {
                        airlineName = "AirTran"
                    } else if (airlineName === "AS") {
                        airlineName = "Alaska Airlines"
                    } else if (airlineName === "NK") {
                        airlineName = "Spirit Airlines"
                    } else if (airlineName === "F9") {
                        airlineName = "Frontier Airlines"
                    } else if (airlineName === "HA") {
                        airlineName = "Hawaiian Airlines"
                    } else if (airlineName === "G4") {
                        airlineName = "Allegiant Air"
                    }

                    let returnAirlineName = flight.itineraries[1].segments[0].carrierCode
                    if (returnAirlineName === "B6") {
                        returnAirlineName = "JetBlue"
                    } else if (returnAirlineName === "DL") {
                        returnAirlineName = "Delta Airlines"
                    } else if (returnAirlineName === "AA") {
                        returnAirlineName = "American Airlines"
                    } else if (returnAirlineName === "NW") {
                        returnAirlineName = "Northwest Airlines"
                    } else if (returnAirlineName === "UA") {
                        returnAirlineName = "United Airlines"
                    } else if (returnAirlineName === "US") {
                        returnAirlineName = "United Airways"
                    } else if (returnAirlineName === "WN") {
                        returnAirlineName = "Southwest Airlines"
                    } else if (returnAirlineName === "FL") {
                        returnAirlineName = "AirTran"
                    } else if (returnAirlineName === "AS") {
                        returnAirlineName = "Alaska Airlines"
                    } else if (returnAirlineName === "NK") {
                        returnAirlineName = "Spirit Airlines"
                    } else if (returnAirlineName === "F9") {
                        returnAirlineName = "Frontier Airlines"
                    } else if (returnAirlineName === "HA") {
                        returnAirlineName = "Hawaiian Airlines"
                    } else if (returnAirlineName === "G4") {
                        returnAirlineName = "Allegiant Air"
                    }
                    flight.user = props.auth.user.id;
                    return (
                        <div key={i} className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">{airlineName}</span>
                                <p>Flight from {flight.itineraries[0].segments[0].departure.iataCode} to {flight.itineraries[0].segments[0].arrival.iataCode}</p>
                                <p> {moment(flight.itineraries[0].segments[0].departure.at).format("MM-DD-YYYY h:mm a")} - {moment(flight.itineraries[0].segments[0].arrival.at).format("MM-DD-YYYY h:mm a")}</p>
                                <p>Stops: {flight.itineraries[0].segments[0].numberOfStops}</p>
                                <br></br>
                                <span className="card-title">{returnAirlineName}</span>
                                <p>Flight from {flight.itineraries[1].segments[0].departure.iataCode} to {flight.itineraries[1].segments[0].arrival.iataCode}</p>
                                <p>{moment(flight.itineraries[1].segments[0].departure.at).format("MM-DD-YYYY h:mm a")} - {moment(flight.itineraries[1].segments[0].arrival.at).format("MM-DD-YYYY h:mm a")}</p>
                                <p>Stops: {flight.itineraries[1].segments[0].numberOfStops}</p>
                                <p>Price per ticket: ${flight.travelerPricings[0].price.total}</p>
                                <p>Total price: ${flight.price.grandTotal} </p>
                            </div>
                            <div>
                                <button onClick={(event) => {
                                    event.preventDefault();
                                    props.addFlightToMongo(flight);
                                }}
                                    style={{
                                        letterSpacing: "1 px",
                                        marginTop: "1rem",
                                        marginBottom: "2px",
                                        background: "#090088"
                                    }}
                                    className="Search btn btn-large hoverable accent-3">
                                    Add to planner</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
SearchFlight.propTypes = {
    addFlightToMongo: PropTypes.func
    
  };
  
const mapStateToProps = (state) => ({    
    auth: state.auth,
  });

export default connect(mapStateToProps, { addFlightToMongo })(
    SearchFlight
  );
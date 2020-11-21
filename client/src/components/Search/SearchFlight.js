import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addFlightToMongo, getSavedFlights } from "../../actions/flightAction";
import "react-datepicker/dist/react-datepicker.css";
import plane from "./images/plane.png";
import DL from "./images/DL.jpg";
import AA from "./images/AA.jpg";
import AS from "./images/AS.png";
import B6 from "./images/B6.jpg";
import F9 from "./images/F9.png";
import FL from "./images/FL.png";
import G4 from "./images/G4.png";
import HA from "./images/HA.png";
import NK from "./images/NK.jpeg";
import NW from "./images/NW.png";
import UA from "./images/UA.gif";
import WN from "./images/WN.jpg";
const moment = require("moment");
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
    const typeOfTrip = [
        { value: "One Way", label: "One Way" },
        { value: "Round Trip", label: "Round Trip" }
    ]
    const [inputs, setInputs] = useState({})
    const [showAdditionalFlightInformation, setShowAdditionalFlightInformation] = useState(false)
    const [tripType, setTripType] = useState(false)
    useEffect(() => {
        props.getSavedFlights(props.auth.user.id);
    }, [props.auth.user.id]);

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
            }).catch((err) => console.log(err));

        // console.log(destinationIataCode.data[0].iataCode);

        let clone2 = inputs
        clone2.destinationIataCode = destinationIataCode.data[0].iataCode
        setInputs(clone2)
        setShowAdditionalFlightInformation(true)
        if (inputs.typeOfTrip === "Round Trip") {
            setTripType(true)
        }
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

    const handleTypeOfTripChange = selectedOption => {
        // this.setState({ selectedOption });
        console.log(`Type of Trip Selected:`, selectedOption);
        const clone = inputs;
        clone.typeOfTrip = selectedOption.value;
        setInputs(clone)
    };

    const flightSearchSubmit = async event => {
        event.preventDefault();
        let returnDate;
        let flights;
        // get data from inputs for flight search
        if (inputs.typeOfTrip === "Round Trip") {
            returnDate = endDate.toISOString().split('T')[0];
            flights = await amadeus.shopping.flightOffersSearch
                .get({
                    originLocationCode: inputs.originIataCode,
                    destinationLocationCode: inputs.destinationIataCode,
                    departureDate: startDate.toISOString().split('T')[0],
                    returnDate: returnDate,
                    adults: inputs.adults,
                    children: inputs.children,
                    currencyCode: "USD",
                    max: 5,
                    travelClass: inputs.travelClass
                })

        } else {
            flights = await amadeus.shopping.flightOffersSearch
                .get({
                    originLocationCode: inputs.originIataCode,
                    destinationLocationCode: inputs.destinationIataCode,
                    departureDate: startDate.toISOString().split('T')[0],
                    adults: inputs.adults,
                    children: inputs.children,
                    currencyCode: "USD",
                    max: 5,
                    travelClass: inputs.travelClass
                })
        }
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
                                <label>
                                    Which type of trip would you like to book today?
                                <Select required name="typeOfTrip" options={typeOfTrip} onChange={handleTypeOfTripChange} />
                                </label>
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
                                {tripType ? <DatePicker name="endDate"
                                    className="endDate" timeInputLabel="When do you want this adventure to start?" selected={endDate} onChange={date => setEndDate(date)} /> : <div></div>}

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
                    let airlineImg = plane;
                    if (airlineName === "B6") {
                        airlineName = "JetBlue"
                        airlineImg = B6
                    } else if (airlineName === "DL") {
                        airlineName = "Delta Airlines"
                        airlineImg = DL
                    } else if (airlineName === "AA") {
                        airlineName = "American Airlines"
                        airlineImg = AA
                    } else if (airlineName === "NW") {
                        airlineName = "Northwest Airlines"
                        airlineImg = NW
                    } else if (airlineName === "UA") {
                        airlineName = "United Airlines"
                        airlineImg = UA
                    } else if (airlineName === "US") {
                        airlineName = "United Airways"
                        airlineImg = UA
                    } else if (airlineName === "WN") {
                        airlineName = "Southwest Airlines"
                        airlineImg = WN
                    } else if (airlineName === "FL") {
                        airlineName = "AirTran"
                        airlineImg = FL
                    } else if (airlineName === "AS") {
                        airlineName = "Alaska Airlines"
                        airlineImg = AS
                    } else if (airlineName === "NK") {
                        airlineName = "Spirit Airlines"
                        airlineImg = NK
                    } else if (airlineName === "F9") {
                        airlineName = "Frontier Airlines"
                        airlineImg = F9
                    } else if (airlineName === "HA") {
                        airlineName = "Hawaiian Airlines"
                        airlineImg = HA
                    } else if (airlineName === "G4") {
                        airlineName = "Allegiant Air"
                        airlineImg = G4
                    }

                    flight.user = props.auth.user.id;
                    return (
                        <div key={i} className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title"><img className="airline-logo" src={airlineImg}></img></span>
                                {flight.itineraries[0].segments.map(flight => {
                                    return <><h6>Flight from {flight.departure.iataCode} to {flight.arrival.iataCode}</h6>
                                        <h6>{moment(flight.departure.at).format("MM-DD-YYYY h:mm a")} - {moment(flight.arrival.at).format("h:mm a")}</h6>
                                    </>
                                })}
                                <br style={{ display: tripType ? "block" : "none" }}></br>
                                <span style={{ display: tripType ? "block" : "none" }} className="card-title"><img className="airline-logo" src={airlineImg}></img></span>
                                {tripType ?
                                    flight.itineraries[1].segments.map(flight => {

                                        return <><h6>Flight from {flight.departure.iataCode} to {flight.arrival.iataCode}</h6>
                                            <h6>{moment(flight.departure.at).format("MM-DD-YYYY h:mm a")} - {moment(flight.arrival.at).format("h:mm a")}</h6>
                                        </>
                                    }) : <div></div>
                                }
                                <hr></hr>
                                <br></br>
                                <h6>Price per ticket: ${flight.travelerPricings[0].price.total}</h6>
                                <h5>Total price: ${flight.price.grandTotal}</h5>                                
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
                                        background: "#090088",

                                    }}
                                    className="Search btn btn-large hoverable accent-3">
                                    Add to planner
                                    <i className="material-icons right">send</i>
                                </button>

                            </div>
                            <br></br>
                        </div>
                    )
                })}
            </div>
        </div >
    );
};
SearchFlight.propTypes = {
    addFlightToMongo: PropTypes.func
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    addFlightToMongo: PropTypes.func,
    getSavedFlights: PropTypes.func,
    savedFlights: PropTypes.array
});

export default connect(mapStateToProps, { addFlightToMongo, getSavedFlights })(
    SearchFlight
);
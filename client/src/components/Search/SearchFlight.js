import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { AmadeusProvider, AmadeusContext } from "../../utils/AmadeusProvider";
// import amadeus from '../../utils/AmadeusProvider'
const Amadeus = require("amadeus");
const amadeus = new Amadeus({
    clientId: "HikDALzxHh0L6AaJXVTRTdxknMs0ItsR",
    clientSecret: "mhpcNiCqSY1olTPP",
});


const SearchFlight = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())


    const travelClass = [
        { value: "ECONOMY", label: "Economy" },
        { value: "PREMIUM_ECONOMY", label: "Premium Economy" },
        { value: "BUSINESS", label: "Business" },
        { value: "FIRST", label: "First" }
    ]
    console.log(travelClass);

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

        // get flights data
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
        console.log(flights)
        console.log(inputs.travelClass)


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
                            <form onSubmit={handleOriginDestinationSubmit}>

                                <input required name="origin" className="origin" placeholder="Where from?" onChange={handleInputs}></input>
                                <input required name="destination" className="destination" placeholder="Where to?" onChange={handleInputs}></input>
                                <button style={{

                                    letterSpacing: "1.5px",
                                    marginTop: "1rem",
                                }}

                                    className="Search btn btn-large hoverable blue accent-3">
                                    Search</button>
                            </form>
                            <br />
                            <form onSubmit={flightSearchSubmit} style={{ display: showAdditionalFlightInformation ? "block" : "none" }}>

                                <input type="number" name="adults" className="adults" placeholder="How many adults will be traveling?" onChange={handleInputs}></input>
                                <input type="number" name="children" className="children" placeholder="How many children will be traveling?" onChange={handleInputs}></input>
                                <br />
                                <label>
                                    Which class would you like to fly in?
                                <Select name="travelClass" options={travelClass} onChange={handleClassChange} />
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
                                }}

                                    className="Search btn btn-large hoverable blue accent-3">
                                    Search</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchFlight;

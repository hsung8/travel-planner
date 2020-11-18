const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Amadeus = require("amadeus");
const moment = require("moment"); 

const amadeus = new Amadeus({
  clientId: "nlVAqdyeoM5IfvtZko8Hcq6gELdwlAC0",
  clientSecret: "O62ALpAuqGBGGCTG",
});

// @route POST api/users/getHotels
// @desc GET hotels info  from Amadeus API
// @access Public
router.post("/getFlights", (req, res) => {
  console.log(
    "flight.js <<) ",
    req.body
  );
  //extracting only the first three letters of the city for getting city IATA code
  const cityCode = req.body.destination.substring(0, 3);
  amadeus.referenceData.locations
    .get({
      keyword: cityCode,
      subType: "CITY",
    })
    .then((response) => {
      console.log(
        "this is iata code of the city you search >> flight.js <<",
        response.result.data[0].iataCode
      );
      const destinationCity = response.result.data[0].iataCode;
      const originCity = response.result.data[0].iataCode;
      //format start date and end date to match Amadeus api format
      const startDate = moment(req.body.startDate).format("YYYY-MM-DD");
      const endDate = moment(req.body.endDate).format("YYYY-MM-DD");
      
      console.log(startDate, endDate);
      amadeus.shopping.flightOffersSearch
        .get({
            originLocationCode: {originCity},
            destinationLocationCode: {destinationCity},
            departureDate: {startDate},
            returnDate: {endDate},
            adults: 1,
            children: 0,
            currencyCode: "USD",
            max: 5,
            travelClass: "ECONOMY"
        })
        .then((response) => {
          return amadeus.next(response);
        })
        .then((nextResponse) => {
          console.log("response from Amadeus API>> flight.js <<",nextResponse.data);
            res.status(200).json(nextResponse.data);

        })
        .catch((err) => {
          console.error(err);
        });
    })
    .catch((response) => {
      console.error(response);
    });
});

// export the router
module.exports = router;

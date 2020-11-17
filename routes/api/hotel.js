const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Amadeus = require("amadeus");
const amadeus = new Amadeus({
  clientId: "HikDALzxHh0L6AaJXVTRTdxknMs0ItsR",
  clientSecret: "mhpcNiCqSY1olTPP",
});
var moment = require("moment"); // require

// @route POST api/users/getHotels
// @desc GET hotels info  from Amadeus API
// @access Public
router.post("/getHotels", (req, res) => {
  console.log(
    "this is the searchObj sent from react front end form >> hotel.js <<) ",
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
        "this is iata code of the city you search >> hotel.js <<",
        response.result.data[0].iataCode
      );
      const cityCode = response.result.data[0].iataCode;
      //format start date and end date to match Amadeus api format
      const startDate = moment(req.body.startDate).format("YYYY-MM-DD");
      const endDate = moment(req.body.endDate).format("YYYY-MM-DD");
      console.log(startDate, endDate);
      amadeus.shopping.hotelOffers
        .get({
          cityCode: cityCode,
          radius: 100,
          radiusUnit: "MILE",
          checkInDate: startDate,
          checkOutDate: endDate,
        })
        .then((response) => {
          return amadeus.next(response);
        })
        .then((nextResponse) => {
          console.log("response from Amadeus API>> hotel.js <<",nextResponse.data);
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

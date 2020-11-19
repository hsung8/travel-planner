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
          includeClosed: true,
          sort: "DISTANCE"

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




// @route PUT api/users/activities
// @desc add activities to the user database based on log in ID
// @access Public
router.put("/postHotel", (req, res) => {
    const { user } = req.body
    const hotel = req.body
    //push the hotel to mongo, then send back all the hotels saved back to React
    User.findByIdAndUpdate(user, {
        $push: { hotels: hotel }
    },{new: true})
        .then(response => {
            console.log("this log the response after the hotel has been succcessfully added to mongo",response)
            res.status(200).json(response.hotels)
        }
        )
        .catch(err => console.log(err))
})




// @route GET api/users/getSAvedHotels
// @desc add activities to the user database based on log in ID
// @access Public
router.get("/getSavedHotels/:id", (req, res) => {
  const user = req.params.id
  User.findById(user)
      .then(response => {
          console.log("this log all the hotel saved about to be sent to React from Mongo", response)
          res.status(200).json(response.hotels) 
      }
      )
      .catch(err => console.log(err))
})



// export the router
module.exports = router;

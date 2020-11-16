const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Amadeus = require('amadeus');
const amadeus = new Amadeus({
    clientId:    'HikDALzxHh0L6AaJXVTRTdxknMs0ItsR',
    clientSecret: 'mhpcNiCqSY1olTPP'
});
var moment = require('moment'); // require


// @route POST api/users/getHotels
// @desc GET hotels info  from Amadeus API
// @access Public
router.post("/getHotels", (req, res) => {
    console.log("this is the searchObj sent from react front end form ",req.body)
    //extracting only the first three letters of the city for getting city IATA code
    const cityCode = req.body.destination.substring(0,3)
    amadeus.referenceData.locations.get({
        keyword: cityCode,
        subType: 'CITY',
        
      })
  .then( (response) => {
    console.log("this is iata code of the city you search",response.result.data[0].iataCode)
    const cityCode = response.result.data[0].iataCode
    const startDate = moment(req.body.startDate).format("yyyy-mm-dd"); 

    console.log(startDate)
    // amadeus.shopping.hotelOffers.get({
    //     cityCode : cityCode,
    //     radius: 10,
    //     radiusUnit: "MILE",
    //     checkInDate: "",
    //     checkOutDate: ""


    //   })
    res.status(200).json(response.body)

  }).catch( (response) => {
    console.error(response);
  });
})


// export the router 
module.exports = router;

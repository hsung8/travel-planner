const express = require("express");
const router = express.Router();
const User = require("../../models/User");

router.put("/postFlight", (req, res) => {
  const { user } = req.body
  const flight = req.body
  User.findByIdAndUpdate(user, {
      $push: { flights: flight }
  },{new: true})
      .then(response => {
          res.status(200).json(response.flights) 
      }
      )
      .catch(err => console.log(err))
})


// @route GET api/users/getSavedFlights
// @desc add activities to the user database based on log in ID
// @access Public
router.get("/getSavedFlights/:id", (req, res) => {
    const user = req.params.id
    User.findById(user)
        .then(response => {
            console.log("this log all the flights saved about to be sent to React from Mongo", response)
            res.status(200).json(response.flights) 
        }
        )
        .catch(err => console.log(err))
  })
  



  // @ROUTE delete
// @des delete an FLIGHT
router.put("/deleteFLight", (req, res) => {
    const user = req.body.user;
    const id = req.body.id;
  
    console.log(user, id);
    User.findByIdAndUpdate(
      user,
      { $pull: { flights: { uniqueId: id } } },
      { new: true }
    )
      .then((response) => {
        console.log("array after you delete", response.flights);
        res.status(200).json(response.flights);
      })
      .catch((err) => console.log(err));
  });
  
// export the router
module.exports = router;

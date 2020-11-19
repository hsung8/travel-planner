const express = require("express");
const router = express.Router();
const User = require("../../models/User");

router.put("/postFlight", (req, res) => {
  const { user } = req.body
  const flight = req.body
  User.findByIdAndUpdate(user, {
      $push: { flights: flight }
  })
      .then(response => {
          res.status(200).json(response.flights) 
      }
      )
      .catch(err => console.log(err))
})

// export the router
module.exports = router;

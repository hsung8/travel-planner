const express = require("express");
const router = express.Router();
const User = require("../../models/User");
router.put("/savingGoal", (req, res) => {
    const { user } = req.body
    //push the hotel to mongo, then send back all the hotels saved back to React
    User.findByIdAndUpdate(user, {
         savingGoal: req.body.goal }
    ,{new: true})
        .then(response => {
            console.log("this log the response after the saving has been succcessfully added to mongo",response)
            res.status(200).json(response.savingGoal)
        }
        )
        .catch(err => console.log(err))
})


router.get("/getSaving/:id", (req, res) => {
    const user = req.params.id
    console.log(user)
    User.findById(user)
        .then(response => {
            console.log("this log all the hotel saved about to be sent to React from Mongo", response)
            res.status(200).json(response.savingGoal) 
        }
        )
        .catch(err => console.log(err))
  })
  
// export the router
module.exports = router;

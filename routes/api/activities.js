const express = require("express");
const router = express.Router();
const User = require("../../models/User");


// @route POST api/users/activities
// @desc POST actitivies 
// @access Public
router.put("/activities",(req, res) => {
//default search location right now, will be replaced once the React
// team finish the activities component
const {user} = req.body
const activity = req.body
User.findByIdAndUpdate(user,{
    $push : {activities: activity}
}).then( res => console.log("This comes from line 17 of activities.js console.log the response from Mongo after you add the activity",res))
.catch(err => console.log(err))
})

// export the router 
module.exports = router;

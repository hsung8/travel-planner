const express = require("express");
const router = express.Router();


// @route GET api/users/activities
// @desc get actitivies nearby
// @access Public
router.post("/activities",(req, res) => {
//default search location right now, will be replaced once the React
// team finish the activities component
const location = "Atlanta"
console.log("test")
})

// export the router 
module.exports = router;

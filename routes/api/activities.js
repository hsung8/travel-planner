const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const yelp = require('yelp-fusion');
const client = yelp.client("1PLVyi4fmTRLknS5zUS29KZGV5BDDh3e6WCWv5ds7SnaHvk1rFDKHmW90CFeTMogcDGUhK_qEXWtsuSGZ9k6HaXk7aeWEPIfx-yCCg2Z_ftSvShgumpl9MIf3UarX3Yx");

// @route PUT api/users/activities
// @desc add activities to the user database based on log in ID
// @access Public
router.put("/activities", (req, res) => {
    const { user } = req.body
    const activity = req.body
    User.findByIdAndUpdate(user, {
        $push: { activities: activity }
    })
        .then(response => {
            console.log("This comes from line 17 of activities.js console.log the response from Mongo after you add the activity", response)
            res.status(200).json(response.activities) 
        }
        )
        .catch(err => console.log(err))
})


// @route GET api/users/getActivities
// @desc GET actitivies  from yelp API
// @access Public
router.post("/getActivities", (req, res) => {
    // store the search term object into a variable called searchTerm to be used for fetch
    //This object look like this
    //    {
    //        address: ""
    //    }
    const searchTerm = req.body.address;
    console.log("this is the search term", searchTerm);
    client.eventSearch({
        location: searchTerm,
        sort_by: "asc",
        limit: 10
    })
        .then(response => {
            // console.log("this console.log the array of events received from Yelp API", response.jsonBody.events)
            res.status(200).json(response.jsonBody.events)
        })
        .catch(e => {
            console.log(e);
        });
})


// @route GET api/users/activities
// @desc add activities to the user database based on log in ID
// @access Public
router.get("/getSavedActivities/:id", (req, res) => {
    const user = req.params.id
    User.findById(user)
        .then(response => {
            console.log("This comes from line 17 of activities.js console.log the response from Mongo after you add the activity", response)
            res.status(200).json(response.activities) 
        }
        )
        .catch(err => console.log(err))
})






// export the router 
module.exports = router;

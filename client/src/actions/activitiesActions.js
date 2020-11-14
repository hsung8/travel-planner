import axios from "axios";
import { SET_ACTIVITIES } from "./types";

const yelp = `Bearer 1PLVyi4fmTRLknS5zUS29KZGV5BDDh3e6WCWv5ds7SnaHvk1rFDKHmW90CFeTMogcDGUhK_qEXWtsuSGZ9k6HaXk7aeWEPIfx-yCCg2Z_ftSvShgumpl9MIf3UarX3Yx`

// get activities from YELP API, the city name comes from user input
export const addActivitiesToMongo  = (activity) => dispatch => {
    fetch(`/api/users/activities`,
    {
    method: "PUT",
    body: JSON.stringify(activity),
    headers: {
        'Content-Type': 'application/json'
      },
    })
    .then( res =>  
        res.json())
    .then( activity => console.log("this come from line 18 of activitiesAction, this is a success response from the backend after it added the activities to the user database",activity))
    .catch (err => console.log(err))
}

// get activities from YELP API, the fulladdress comes from user input
export const getActivitiesByAddress  = (fullAddress)  => dispatch => {
    fetch(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/events?location=${fullAddress}&limit=10`, {
        method: 'get',
        headers: {"Authorization": yelp },
    })
    .then( res => res.json())
    .then( activities => {
        // console.log(activities.events)
        dispatch({
            type: SET_ACTIVITIES,
            payload: activities.events
          })
    } )
    .catch (err => console.log(err))
}
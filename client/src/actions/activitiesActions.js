import axios from "axios";
import {yelp} from "../../../config/keys"
import { SET_ACTIVITIES } from "./types";

// get activities from YELP API, the city name comes from user input
export const getActivitiesByCity  = (city) => dispatch => {
    axios.get(
    {
    method: "get",
    url: `https://api.yelp.com/v3/events?location=${city}`,
    headers: {"Authorization": yelp }
    })
    .then( (res) =>  dispatch({
        type: SET_ACTIVITIES,
        payload: res
      }))
    .catch (err => console.log(err))
}

// get activities from YELP API, the fulladdress comes from user input
export const getActivitiesByAddress  = (fullAddress) => dispatch => {
    axios.get(
    {
    method: "get",
    url: `https://api.yelp.com/v3/events?location=${fullAddress}`,
    headers: {"Authorization": yelp }
    })
    .then( (res) => res.json())
    .then( activities => res.send(activities))
    .catch (err => res.status(400).json(err))
}
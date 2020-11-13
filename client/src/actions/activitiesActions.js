import axios from "axios";
import { SET_ACTIVITIES } from "./types";

const yelp = "1PLVyi4fmTRLknS5zUS29KZGV5BDDh3e6WCWv5ds7SnaHvk1rFDKHmW90CFeTMogcDGUhK_qEXWtsuSGZ9k6HaXk7aeWEPIfx-yCCg2Z_ftSvShgumpl9MIf3UarX3Yx"
// get activities from YELP API, the city name comes from user input
export const getActivitiesByCity  = (city) => dispatch => {
    axios.get(
    {
    method: "get",
    url: `https://api.yelp.com/v3/events?location=${city}`,
    headers: {"Authorization": yelp }
    })
    .then( res =>  dispatch({
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
    .then( res => {
        console.log(res)
        dispatch({
            type: SET_ACTIVITIES,
            payload: res
          })
    } )
    .catch (err => console.log(err))
}
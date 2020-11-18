import { GET_HOTELS, SAVE_HOTEL } from "./types";


//get hotel infor from Amadeus API
export const getHotels = (searchObj) => (dispatch) => {
  console.log(
    "this logs the search object to be used to send the back end for API querying",
    searchObj
  );
  fetch(`/api/users/getHotels`, {
    method: "POST",
    body: JSON.stringify(searchObj),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((hotels) => {
      console.log("this is the array of hotels extracted from our backend server",hotels);
      dispatch({
        type: GET_HOTELS,
        payload: hotels
    })
    })
    .catch((err) => console.log(err));
};


// Post hotels to Mongo
export const addHotelToMongo  = (hotel) => dispatch => {    
    console.log("line 31 of hotelActions, log the hotels to be send to Mongo",hotel)
    fetch(`/api/users/postHotel`,
    {
    method: "PUT",
    body: JSON.stringify(hotel),
    headers: {
        'Content-Type': 'application/json'
      },
    })
    .then( res => res.json())
    .then( (response) => {
        console.log("this log the response after you added the hotel to mongo",response);
        dispatch({
            type: SAVE_HOTEL,
            payload: response
        })
    })
    .catch (err => console.log(err))
}

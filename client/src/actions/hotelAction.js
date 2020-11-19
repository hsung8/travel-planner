import { GET_HOTELS, SAVE_HOTEL , SELECTED_HOTEL} from "./types";


//get hotel info from Amadeus API
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
    const key = hotel.key;
   
    console.log(" log the hotels to be send to Mongo",hotel)
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
        });
        dispatch({
          type: SELECTED_HOTEL,
          payload: key,
        });
    })
    .catch (err => console.log(err))
}


export const getSavedHotels = (id) => (dispatch) => {
  fetch(`/api/users/getSavedHotels/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((res) => res.json())
    .then((hotels) => {
      console.log(
        "this comes from activities Action.js, console.log all the saved hotels in our mongo database",
        hotels
      );
      dispatch({
        type: SAVE_HOTEL,
        payload: hotels,
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
import { POST_FLIGHT, GET_SAVED_FLIGHT } from "./types";



//delete a flight 
export const deleteFlight
= (id, user) => (dispatch) => {
  const flightToDelete = {
    id: id,
    user: user
  }
  console.log(flightToDelete)
  fetch(`/api/users/deleteFlight`, {
    method: "PUT",
    body: JSON.stringify(flightToDelete),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((savedFlights) => {
      console.log(
       "this is the array of activity after you delete",
       savedFlights
      );
      dispatch({
        type: GET_SAVED_FLIGHT,
        payload: savedFlights,
      });
    })
    .catch((err) => console.log(err));
};



//get hotel infor from Amadeus API
export const addFlightToMongo = (flight) => (dispatch) => {
  fetch(`/api/users/postFlight`, {
    method: "PUT",
    body: JSON.stringify(flight),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((flights) => {
      console.log("this is the array of flights extracted from our backend server",flights);
      dispatch({
        type: POST_FLIGHT,
        payload: flights
    })
    })
    .catch((err) => console.log(err));
};


export const getSavedFlights = (id) => (dispatch) => {
  fetch(`/api/users/getSavedFlights/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((res) => res.json())
    .then((flights) => {
      console.log(
        "all saved flights",
        flights
      );
      dispatch({
        type: GET_SAVED_FLIGHT,
        payload: flights,
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
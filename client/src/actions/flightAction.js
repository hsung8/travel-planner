import { POST_FLIGHT } from "./types";


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
    // .then((flights) => {
    //   console.log("this is the array of hotels extracted from our backend server",flights);
    //   dispatch({
    //     type: POST_FLIGHT,
    //     payload: flights
    // })
    // })
    .catch((err) => console.log(err));
};
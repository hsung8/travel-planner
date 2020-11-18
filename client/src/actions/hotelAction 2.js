import { GET_HOTELS } from "./types";

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

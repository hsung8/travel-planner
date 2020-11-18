import { GET_HOTELS } from "../actions/types";

const initialState = {
  hotels: []
}



export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HOTELS:
      //if successful got data from YELP, export that data to the activities state
      return {
        hotels: [...action.payload]
      }
    ;
    default:
      return state;
  }
}


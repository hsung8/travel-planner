import { GET_HOTELS , SAVE_HOTEL} from "../actions/types";

const initialState = {
  hotels: [],
  savedHotels: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HOTELS:
      //if successful got data from YELP, export that data to the activities state
      return {
        hotels: [...action.payload],
        savedHotels: []
      }
    ;
    case SAVE_HOTEL:
            //if successful post hotel to mongo, return all the hotels saved state
      return {
        ...state,
        savedHotels: action.payload
      }
    default:
      return state;
  }
}


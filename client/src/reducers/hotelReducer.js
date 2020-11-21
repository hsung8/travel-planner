import { GET_HOTELS, SAVE_HOTEL, SELECTED_HOTEL } from "../actions/types";

const initialState = {
  hotels: [],
  savedHotels: [],
  default: "hotel information will display here",
  selectedHotels: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_HOTELS:
      //if successful got data from YELP, export that data to the activities state
      return {
        hotels: [...action.payload],
        savedHotels: [...state.savedHotels],
        selectedHotels: [...state.selectedHotels],
      };
    case SAVE_HOTEL:
      //if successful post hotel to mongo, return all the hotels saved in database
      console.log(action.payload)
      return {
        ...state,
        savedHotels: [...action.payload],
      };
    case SELECTED_HOTEL:
      return {
        ...state,
        selectedHotels: [...state.selectedHotels,action.payload],
      };
    default:
      return state;
  }
}

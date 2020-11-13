import { SET_ACTIVITIES } from "../actions/types";

const initialState = {
    activities: []
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_ACTIVITIES:
        //if successful got data from YELP, export that data to the activities state
        return {
          activities: action.payload
        };
      default:
        return state;
    }
  }
  

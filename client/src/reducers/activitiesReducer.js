import { SELECTED, SET_ACTIVITIES, SAVED_ACTIVITIES } from "../actions/types";

const initialState = {
  activities: {
    default: "Events will be display here",
  },
  selected: [],
  savedActivities: []
};  

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVITIES:
      //if successful got data from YELP, export that data to the activities state
      console.log(action.payload)
      return {
        activities: action.payload,
        selected: [],
        savedActivities: []
      };
    case SELECTED:
      return {
        ...state,
        selected: [...state.selected, action.payload],
      };
    case SAVED_ACTIVITIES:
      return {
        ...state,
        savedActivities: [...state.savedActivities, action.payload],
      };
    default:
      return state;
  }
}

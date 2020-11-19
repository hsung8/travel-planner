import { SELECTED_ACTIVITIES, SET_ACTIVITIES, SAVED_ACTIVITIES } from "../actions/types";

const initialState = {
  activities: {
    default: "Events will be display here",
  },
  selectedActivities: [],
  savedActivities: []
}; 

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVITIES:
      //if successful got data from YELP, export that data to the activities state
      console.log(action.payload)
      return {
        activities: action.payload,
        selectedActivities: [],
        savedActivities: [...state.savedActivities]
      };
    //if you click on the save button, add that button to the selected list and make it disappear
    case SELECTED_ACTIVITIES:
      return {
        ...state,
        selectedActivities: [...state.selectedActivities, action.payload],
      };
    // get all the saved activities from mongo
    case SAVED_ACTIVITIES:
      return {
        ...state,
        savedActivities: [...action.payload],
      };
    default:
      return state;
  }
}

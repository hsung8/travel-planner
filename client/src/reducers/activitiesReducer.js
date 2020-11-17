import { SELECTED, SET_ACTIVITIES } from "../actions/types";

const initialState = {
  activities: {
    default: "Events will be display here"
  },
  selected: []
}



export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVITIES:
      //if successful got data from YELP, export that data to the activities state
      return {
        activities: action.payload,
        selected: []
      }
    ;
    case SELECTED:
      console.log(state)
      return {
        ...state,
        selected: [...state.selected,action.payload]
      };
    default:
      return state;
  }
}


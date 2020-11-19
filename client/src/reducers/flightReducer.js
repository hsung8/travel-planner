// import { POST_FLIGHT } from "../actions/types";

// const initialState = {
//   savedFlights: []
// }

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case POST_FLIGHT:
//       //if successful got data from YELP, export that data to the activities state
//       return {
//         hotels: [...action.payload],
//         savedHotels: []
//       }
//     ;
//     case SAVE_HOTEL:
//             //if successful post hotel to mongo, return all the hotels saved state
//       return {
//         ...state,
//         savedHotels: action.payload
//       }
//     default:
//       return state;
//   }
// }

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import activitiesReducer from "./activitiesReducer"
import hotelReducer from "./hotelReducer"
import flightReducer from "./flightReducer"
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  activities: activitiesReducer,
  hotel: hotelReducer,
  flight: flightReducer
});

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getHotels,
  addHotelToMongo,
  getSavedHotels,
} from "../../actions/hotelAction";
import M from "materialize-css";
import { render } from "react-dom";

const SearchHotel = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [destination, setDestination] = useState("");

  useEffect(() => {
    props.getSavedHotels(props.auth.user.id);
  }, [props.auth.user.id]);

  function handleChange(event) {
    setDestination(event.target.value);
  }

  function isPast(date) {
    const day = new Date();
    return day < date;
  }
  return (
    <div className="row">
      <div className="col s12 center-align">
        <div className="card horizontal searchBox">
          <div className="card-stacked">
            <div className="card-content">
              <Link
                to="/hotel"
                className="btn btn-large hoverable accent-3"
                style={{
                  marginRight: 10,
                  background: "#f9bc60",
                  color: "#001e1d",
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
              >
                HOTELS
              </Link>
              <Link
                to="/flights"
                className="btn btn-large hoverable accent-3"
                style={{
                  marginRight: 10,
                  background: "#f9bc60",
                  color: "#001e1d",
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
              >
                FLIGHTS
              </Link>
              {/* <Link
                to="/rental"
                className="btn btn-large hoverable  accent-3"
                style={{
                  marginRight: 10,
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: ".5px",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  background: "#f9bc60",
                  color: "#001e1d",
                }}
              >
                RENTALCARS
              </Link> */}
              <Link
                to="/activity"
                className="btn btn-large hoverable accent-3"
                style={{
                  marginRight: 10,
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  background: "#f9bc60",
                  color: "#001e1d",
                }}
              >
                ACTIVITIES
              </Link>
              <br />
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  props.getHotels({
                    startDate,
                    endDate,
                    destination,
                  });
                }}
              >
                <input
                  className="destination"
                  placeholder="Where is your adventure taking you?"
                  value={destination}
                  onChange={handleChange}
                ></input>
                <div style={{ color: "grey" }}>
                  {" "}
                  You can type in a city name here, but for more accurate
                  result, please try to use IATA 3-digits city code of the city
                  you want to search, you can use{" "}
                  <a
                    href="https://www.iata.org/en/publications/directories/code-search/"
                    target="blank"
                  >
                    THIS WEBSITE
                  </a>{" "}
                  to help you look it up
                </div>
                <br />
                <DatePicker
                  className="startDate"
                  timeInputLabel="When do you want this adventure to start?"
                  selected={startDate}
                  selectsStart
                  startDate={startDate}
                  filterDate={isPast}
                  onChange={(date) => setStartDate(date)}
                />
                <br />
                <DatePicker
                  className="endDate"
                  timeInputLabel="When do you want this adventure to start?"
                  selected={endDate}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  filterDate={isPast}
                  onChange={(date) => setEndDate(date)}
                />
                <br />
                <button
                  style={{
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    background: "#090088",
                  }}
                  type="submit"
                  className="Search btn btn-large hoverable accent-3"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="card-content">
              {props.default ? (
                <div>{props.default}</div>
              ) : props.hotel.length === 0 ? (
                <div>No hotel can be found</div>
              ) : (
                props.hotel.map((item, id) => {
                  const key = id;
                  const name = item.hotel.name;
                  const phone = item.hotel.contact
                    ? item.hotel.contact.phone
                    : "not available";

                  const media = item.hotel.media
                    ? item.hotel.media[0].uri
                    : "https://picsum.photos/200/300";
                  const price = item.offers
                    ? item.offers[0].price.base
                    : "not available";
                  const total = item.offers
                    ? item.offers[0].price.total
                    : "not available";
                  const description = item.offers
                    ? item.offers[0].room.description.text
                    : "not available";
                  const bookingID = item.offers
                    ? item.offers[0].id
                    : "not available";
                  // add the user id to each item so we can id to locate which user to save to mongoDB
                  item.user = props.auth.user.id;
                  return (
                    <>
                      <div key={key}>
                        <div>Hotel: {name}</div>
                        <div>
                          Address:{" "}
                          {`${item.hotel.address.lines[0]} ${item.hotel.address.cityName} ${item.hotel.address.stateCode}`}
                        </div>
                        <div>Contact: {phone}</div>
                        <img
                          src={media}
                          alt="hotel-image"
                          width="100px"
                          height="100px"
                        ></img>
                        <div>Rating: {item.hotel.rating}</div>
                        <div>Base Price: {`${price} USD per night`}</div>
                        <div>Total Price : {`${total} USD per night`} </div>
                        <div>Room Description: {`${description}`} </div>
                        <div>Booking Id : {`${bookingID}`}</div>
                        {/* button to save */}
                        {!props.selectedHotels.includes(key) ? (
                          <button
                            id={key}
                            className="btn waves-effect waves-light"
                            type="button"
                            onClick={(event) => {
                              event.preventDefault();
                              //ADD THE USER to the activities data so mongoose can locate the user based on _userID
                                item.user = props.auth.user.id;
                                item.key = key;
                              props.addHotelToMongo(item);
                              M.toast({
                                html: "Successfully added to planner",
                                class: "toast",
                              });
                            }}
                          >
                            Add to planner
                          </button>
                        ) : (
                          <div></div>
                        )}
                      </div>
                      <br />
                      <br />
                      <br />
                      <div className="divider"></div>
                      <br />
                      <br />
                      <br />
                      <br />
                    </>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SearchHotel.propTypes = {
  getHotels: PropTypes.func,
  hotel: PropTypes.array,
  addHotelToMongo: PropTypes.func,
  savedHotels: PropTypes.array,
  getSavedHotels: PropTypes.func,
};

const mapStateToProps = (state) => ({
  hotel: state.hotel.hotels,
  auth: state.auth,
  savedHotels: state.hotel.savedHotels,
  default: state.hotel.default,
  selectedHotels: state.hotel.selectedHotels,
});

export default connect(mapStateToProps, {
  getHotels,
  addHotelToMongo,
  getSavedHotels,
})(SearchHotel);

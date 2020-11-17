import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getHotels } from "../../actions/hotelAction";

const SearchHotel = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [destination, setDestination] = useState("");

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
        <div className="card horizontal">
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
                  marginBottom: "1rem"
                }}
              >
                FLIGHTS
              </Link>
              <Link
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
              </Link>
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
                  }}
                  type="submit"
                  className="Search btn btn-large hoverable blue accent-3"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="card-content">
                {props.hotel.length === 0 ? 
                <div>No hotel can be found</div>
            :
            props.hotel.map(item => {
                return <div>{item.hotel.cityCode}</div>
            })}
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
};

const mapStateToProps = (state) => ({
  hotel: state.hotel.hotels,
});

export default connect(mapStateToProps, { getHotels })(SearchHotel);

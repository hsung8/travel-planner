import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSavedFlights, deleteFlight } from "../../actions/flightAction";

const moment = require("moment");

class FlightTable extends Component {
  componentDidMount() {
    this.props.getSavedFlights(this.props.auth.user.id);
  }

  renderTableData() {
    return this.props.flights.map((flight, index) => {
      const departCity = flight.itineraries[0].segments[0].departure.iataCode;
      const departDate = moment(
        flight.itineraries[0].segments[0].departure.at
      ).format("MM-DD-YYYY h:mm a");
      const arrivalCity = flight.itineraries[0].segments[0].arrival.iataCode;
      const arrivalDate = moment(
        flight.itineraries[0].segments[0].arrival.at
      ).format("MM-DD-YYYY h:mm a");
      const cost = flight.price.total;
      const id = flight.uniqueId
      return (
        <tr key={index}>
          <td>{departCity}</td>
          <td>{departDate}</td>
          <td>{arrivalCity}</td>
          <td>{arrivalDate}</td>
          <td>${cost}</td>
          <td>
            <button
              onClick={(event) => {
                event.preventDefault();
                this.props.deleteFlight(id, this.props.auth.user.id);
              }}
              type="btn btn-small"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = ["Departure", "Time", "Arrival", "Time", "Cost", "Delete"];
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div>
        <table id="travel">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

FlightTable.propTypes = {
  flights: PropTypes.array,
  getSavedFlights: PropTypes.func,
  deleteFlight: PropTypes.func
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  flights: state.flight.savedFlights,
});

export default connect(mapStateToProps, { getSavedFlights, deleteFlight })(FlightTable);

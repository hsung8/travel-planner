import React, { Component } from "react";
import { Pie, Doughnut } from 'react-chartjs-2';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSavedActivities } from "../../actions/activitiesActions";
import { getSavedFlights } from "../../actions/flightAction";
import { getSavedHotels } from "../../actions/hotelAction";

let data;
let activityCost;
let hotelCost = 0;
let flightCost = 0;

class Piechart extends Component {
  componentDidMount() {
    this.props.getSavedActivities(this.props.auth.user.id);
    this.props.getSavedFlights(this.props.auth.user.id);
    this.props.getSavedHotels(this.props.auth.user.id);
  };

  totalFlightCost() {
    flightCost = 0;
    for (let i = 0; i < this.props.flights.length; i++) {
      flightCost += parseFloat(this.props.flights[i].price.total);
    }
  };

  totalHotelCost() {
    hotelCost = 0;
    for (let i = 0; i < this.props.hotels.length; i++) {
      if (this.props.hotels[i].offers[0].price.total)
        hotelCost += parseFloat(this.props.hotels[i].offers[0].price.total);
      else return;
    }
  };

  totalActivityCost() {
    activityCost = 0;
    for (let i = 0; i < this.props.activities.savedActivities.length; i++) {
      if (this.props.activities.savedActivities[i].cost)
        activityCost += this.props.activities.savedActivities[i].cost;
      else return
    };
    data = {
      labels: ['Flights', 'Hotels',
        'Activities'],
      datasets: [
        {
          label: 'Travel Budgets',
          backgroundColor: [
            '#d92027',
            '#50d890',
            '#0278ae'
          ],
          hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#003350'
          ],
          data: [flightCost, hotelCost, activityCost]
        }
      ]
    };
  };

  render() {
    return (
      <div>
        {this.totalActivityCost()}
        {this.totalHotelCost()}
        {this.totalFlightCost()}
        <Doughnut
          data={data}
          options={{
            title: {
              display: true,
              text: 'Travel Budgets',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
    );
  };
};


Piechart.propTypes = {
  activities: PropTypes.object,
  getSavedActivities: PropTypes.func,
  getSavedFlights: PropTypes.func,
  getSavedHotels: PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  activities: state.activities,
  flights: state.flight.savedFlights,
  hotels: state.hotel.savedHotels,
});

export default connect(mapStateToProps, {
  getSavedFlights,
  getSavedActivities,
  getSavedHotels
})(Piechart);
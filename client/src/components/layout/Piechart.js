import React, { Component } from "react";
import { Pie, Doughnut } from 'react-chartjs-2';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getActivitiesByAddress, addActivitiesToMongo, getSavedActivities } from "../../actions/activitiesActions";

const state = {
  labels: ['Flights', 'Hotels',
    'Activities'],
  datasets: [
    {
      label: 'Travel Budgets',
      backgroundColor: [
        '#d92027',
        '#50d890',

        '#0278ae',
        '#9818d6'
      ],
      hoverBackgroundColor: [
        '#501800',
        '#4B5000',

        '#003350',
        '#35014F'
      ],
      data: [75, 59, 40]
    }
  ]
};


class Piechart extends Component {
  componentDidMount() {
    this.props.getSavedActivities(this.props.auth.user.id)
  };

  totalActivityCost() {
    let totalActivityCost;
    for (let i = 0; i < 0; i++) {
      totalActivityCost = parseFloat(this.props.activities.savedActivities[2].cost);
    };
    console.log(this.props.activities.savedActivities);
    console.log("this is the total activity cost " + totalActivityCost);
  };

  render() {
    
    return (
      <div>
        <Doughnut
          data={state}
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
  getSavedActivities: PropTypes.func
};

const mapStateToProps = state => ({
  auth: state.auth,
  activities: state.activities,
});

export default connect(
  mapStateToProps,
  { getActivitiesByAddress, addActivitiesToMongo, getSavedActivities }
)(Piechart);
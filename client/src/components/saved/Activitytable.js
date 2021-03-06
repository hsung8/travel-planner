import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getActivitiesByAddress,
  addActivitiesToMongo,
  getSavedActivities,
  deleteActivity,
} from "../../actions/activitiesActions";

class ActivityTable extends Component {
  componentDidMount() {
    this.props.getSavedActivities(this.props.auth.user.id);
  }

  renderTableData() {
    return this.props.activities.savedActivities.map((travel, index) => {
      const { image_url, name, category, cost, description, id } = travel;
      return (
        <tr key={index}>
          <td>
            <img
              href={image_url}
              src={image_url}
              style={{ height: "100px" }}
            ></img>
          </td>
          <td>{name}</td>
          <td>{category}</td>
          <td>${cost}</td>
          <td>{description}</td>
          <td>
            <button
              className="btn"
              type="btn btn-small"
              onClick={(event) => {
                event.preventDefault();
                this.props.deleteActivity(id, this.props.auth.user.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = [
      "Event Image",
      "Event",
      "Category",
      "Cost",
      "Description",
      "Delete",
    ];
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

ActivityTable.propTypes = {
  activities: PropTypes.object,
  getSavedActivities: PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  activities: state.activities,
});

export default connect(mapStateToProps, {
  getActivitiesByAddress,
  addActivitiesToMongo,
  getSavedActivities,
  deleteActivity,
})(ActivityTable);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Piechart from "../layout/Piechart";
import ActivityTable from "../../saved/Activitytable";
import HotelTable from "../../saved/Hoteltable";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSavedActivities } from "../../actions/activitiesActions";
import { getSavedFlights } from "../../actions/flightAction";
import { getSavedHotels } from "../../actions/hotelAction";

let activityCost;
let hotelCost;
let flightCost;

class Budget extends Component {
  state = {
    savingsGoal: "",
    savingsLength: "",
    savingsPerWeek: "",
    style: "none",
  };
  totalActivityCost() {
    activityCost = 0;
    for (let i = 0; i < this.props.activities.savedActivities.length; i++) {
      if (this.props.activities.savedActivities[i].cost)
        activityCost += this.props.activities.savedActivities[i].cost;
      else return
    };
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
      if (this.props.hotels[i].offers)
        hotelCost += parseFloat(this.props.hotels[i].offers[0].price.total);
      else return;
    }
  };
  componentDidMount() {
    this.props.getSavedActivities(this.props.auth.user.id);
    this.props.getSavedFlights(this.props.auth.user.id);
    this.props.getSavedHotels(this.props.auth.user.id);
    fetch(`/api/users/getSaving/${this.props.auth.user.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json())
      .then(saving => {
          console.log(saving)
          this.setState({...this.state,savingsGoal : saving})
      });
  }

  handleSearchEvent = (e) => {
    if (e.target.name === "savingsGoal") {
      this.setState({ savingsGoal: e.target.value });
    }
    if (e.target.name === "savingsLength") {
      this.setState({ savingsLength: e.target.value });
    }
  };

  handleSubmit = (goal) => {
      const savingGoal = {
          user: this.props.auth.user.id,
          goal: goal
      }
    fetch(`/api/users/savingGoal`, {
      method: "PUT",
      body: JSON.stringify(savingGoal),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    console.log(this.state.savingsPerWeek);
    const savings =
      parseFloat(this.state.savingsGoal) / parseFloat(this.state.savingsLength);
    this.setState({ savingsPerWeek: savings });
    this.setState({ style: "" });
  };

  render() {
    return (
      <div className="row">
        {this.totalActivityCost()}
        {this.totalHotelCost()}
        {this.totalFlightCost()}
        <div className="col s12 m12 l3 center-align">
          <div style={{ width: "100%" }} className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <button 
                    style={{
                    marginBottom: 10,
                    width: "100%",
                    }}
                    onClick={this.onTableClick}
                    className="btn btn-large hoverable purple accent-3">
                    Budget
                </button>
        
                <br />

                <button 
                    style={{
                    marginBottom: 10,
                    width: "100%",
                    }}
                    onClick={this.onHotelClick}
                    className="btn btn-large hoverable green accent-3">
                    HOTELS
                </button>
                
                <br />

                <button 
                    style={{
                    marginBottom: 10,
                    width: "100%",
                    }}
                    onClick={this.onFlightsClick}
                    className="btn btn-large hoverable red accent-3">
                    FLIGHTS
                </button>
               
                <br />
                {/* <Link to="/rental"
                                    className="btn btn-large hoverable green accent-3"
                                    style={{
                                        marginBottom: 10,
                                        width: "100%"
                                    }}
                                >RENTAL CARS</Link><br /> */}
                
                <button 
                    style={{
                    marginBottom: 10,
                    width: "100%",
                    }}
                    onClick={this.onTableClick}
                    className="btn btn-large hoverable blue accent-3">
                    ACTIVITIES
                </button>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="col s13 m12 l9 center-align">
          <div style={{ width: "100%"}} className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <div className="col s4 center-align">
                  <h6>Your goal: </h6>
                  <form
                    onSubmit={(res) => {
                      res.preventDefault();
                    }}
                  >
                    <input
                      onChange={this.handleSearchEvent}
                      name="savingsGoal"
                      className="savingsGoal"
                      placeholder="What is your savings goal?"
                      style={{ textAlign: "center", fontSize: "12.5px" }}
                      value={this.state.savingsGoal}
                    ></input>
                    <input
                      onChange={this.handleSearchEvent}
                      name="savingsLength"
                      className="savingsLength"
                      placeholder="How many weeks to save?"
                      style={{ textAlign: "center", fontSize: "12.5px" }}
                    ></input>

                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        console.log(this.state.savingsGoal)
                        this.handleSubmit(this.state.savingsGoal);
                      }}
                      type="submit"
                      className="btn btn-large waves-effect hoverable"
                      style={{ background: "#090088" }}
                    >
                      Submit
                    </button>
                  </form>
                  <h4 className="totalSavings"></h4>
                  <br />
                  <h6>Your estimates: ${parseFloat(activityCost + flightCost + hotelCost).toFixed(2)}</h6>
                </div>
                <div className="col s8 center-align">
                  <Piechart />
                </div>
              </div>
              </div>
              <h5
                className="savingsPerWeek"
                style={{ display: this.state.style }}
              >
                You need to save {this.state.savingsPerWeek} each week to save{" "}
                {this.state.savingsGoal}! Get Saving!
              </h5>
            </div>
          </div>
          <div style={{ width: "100%"}} className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <div style={{ marginBottom:"5rem"}}className="col s12 center-align">
                  <ActivityTable />
                  <HotelTable />
                </div>
              </div>
            </div>
          </div>
       
      </div>
    );
  }
}

Budget.propTypes = {
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
  getSavedHotels,
})(Budget);

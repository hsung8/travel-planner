import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Logout from "../layout/Logout"
import Budget from "../layout/Budget"
import Search from "../Search/Search"

class Dashboard extends Component {

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <Logout />
        <div style={{ height: "75vh" }} className="container">
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                Hello, <b>{user.name.split(" ")[0]}</b>👋 Ready to Getaway?
              </h4>
              <Budget />
            </div>
          </div>
        </div>
        <div style={{ height: "75vh" }} className="container">
          <div className="col s12 center-align">
            <Search />
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);


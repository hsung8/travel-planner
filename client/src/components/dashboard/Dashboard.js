import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Logout from "../layout/Logout"
<<<<<<< HEAD
import SearchFlight from "../Search/SearchFlight.js"
=======
>>>>>>> 3dee230777a05d7309a3a0a9a1f28c4e9d67aad3

class Dashboard extends Component {

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <Logout />
      
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
            </h4>
          </div>
<<<<<<< HEAD
        </div >

          <SearchFlight />

=======
        </div>
      </div>
>>>>>>> 3dee230777a05d7309a3a0a9a1f28c4e9d67aad3
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


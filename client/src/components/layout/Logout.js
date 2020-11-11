import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";

class Logout extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };


    render() {
        return (
            <div className = "row">
                <Link
                    to="/"
                    style={{
                        fontFamily: "monospace",
                        float: "left"
                    }}
                    className="col s2 brand-logo black-text"
                ><i className="material-icons">code</i>Travel-app</Link>
                <button
                    style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem",
                        float: "right",
                        marginRight: "10px"
                    }}
                    onClick={this.onLogoutClick}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                    Logout
                </button>
            </div>
        )
    }
}

Logout.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Logout);
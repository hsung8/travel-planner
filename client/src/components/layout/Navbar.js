import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-5">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
                display: "flex"
              }}
              className="col s4 brand-logo center black-text"
            ><i className="material-icons">code</i>Travel-Hub</Link>
            <Link
              to="/register"
              style={{
                width: "120px",
                marginRight: "5px",
                marginTop: "1px",
                paddingRight: "5px",
                paddingLeft: "5px",
                letterSpacing: "1.5px",
                background: "#e16162",
                
              }}
              className="col s4 right btn btn-large waves-effect waves-light hoverable blue accent-3"
            >Register</Link>
            <Link
              to="/login"
              style={{
                width: "120px",
                letterSpacing: "1.5px",
                marginRight: "5px",
                paddingRight: "5px",
                paddingLeft: "5px",
                marginTop: "1px",
               
              }}
              className="col s4 right btn btn-large btn-flat waves-effect white black-text"
            >Log In</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

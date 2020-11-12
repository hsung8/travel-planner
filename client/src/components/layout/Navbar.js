import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
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
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                background: "#e16162",
                
              }}
              className="col s4 right btn btn-large waves-effect waves-light hoverable accent-3"
            >Register</Link>
            <Link
              to="/login"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                background: "#004643",
               
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

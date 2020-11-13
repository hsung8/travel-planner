import React from "react";
import { Link } from "react-router-dom";
import SearchFlight from "../Search/SearchFlight.js";
import Navbar from "../layout/Navbar"

<<<<<<< HEAD
const Landing = () => {
  return (
    <div>
      <Navbar />
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <span style={{ fontFamily: "monospace" }}>TRAVEL APP</span> BOOK IT AND GO, CATCH YOU OUTSIDE HOWBOUT THAT!
            </h4>
            <p className="flow-text grey-text text-darken-1">
              A freaking cool tool to book your travel for your next trip !!!
=======
class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ height: "120vh"}} className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                <span style={{ fontFamily: "monospace"}}>TRAVEL APP</span> BOOK IT AND GO, CATCH YOU OUTSIDE HOWBOUT THAT!
            </h4>
              <p className="flow-text white-text text-brighten-1">
                A freaking cool tool to book your travel for your next trip !!!
>>>>>>> 3dee230777a05d7309a3a0a9a1f28c4e9d67aad3
            </p>
            <br />
          </div>
          <SearchFlight />
        </div>
      </div>
    </div>
  );
};

export default Landing;

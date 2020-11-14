import React, { Component, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import PropTypes from "prop-types";
import { getActivitiesByAddress } from "../../actions/activitiesActions"


class SearchActivity extends Component {
    state = {
        searchTerm: ""
    }

    handleSearchEvent = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col s12 center-align">
                    <div className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content">
                                <Link
                                    to="/hotel"
                                    className="btn btn-large hoverable accent-3"
                                    style={{
                                        marginRight: 10,
                                        background: "#f9bc60",
                                        color: "#001e1d",
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem",
                                        marginBottom: "1rem",
                                        background: "#f9bc60",
                                        color: "#001e1d"
                                    }}
                                >HOTELS</Link>
                                <Link to="/flights"
                                    className="btn btn-large hoverable accent-3"
                                    style={{
                                        marginRight: 10,
                                        background: "#f9bc60",
                                        color: "#001e1d",
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem",
                                        marginBottom: "1rem",
                                        background: "#f9bc60",
                                        color: "#001e1d"

                                    }}
                                >FLIGHTS</Link>
                                <Link to="/rental"
                                    className="btn btn-large hoverable accent-3"
                                    style={{
                                        marginRight: 10,
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: ".5px",
                                        marginTop: "1rem",
                                        marginBottom: "1rem",
                                        background: "#f9bc60",
                                        color: "#001e1d"
                                    }}
                                >RENTALCARS</Link>
                                <Link to="/activity"
                                    className="btn btn-large hoverable accent-3"
                                    style={{
                                        marginRight: 10,
                                        background: "#f9bc60",
                                        color: "#001e1d",
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem",
                                        marginBottom: "1rem",
                                        background: "#f9bc60",
                                        color: "#001e1d"
                                    }}
                                >ACTIVITIES</Link>
                                <br />
                                <form onSubmit={(event) => {
                                    event.preventDefault();
                                    console.log("form successuflly submitted");
                                    this.props.getActivitiesByAddress(this.state.searchTerm)
                                }}>
                                    <input onChange={this.handleSearchEvent} value={this.state.searchTerm} name="activitiesSearch" type="text" className="address" placeholder="What is the address where you want to do an activity?"></input>

                                    <br />
                                    <Link style={{
                                 
                              
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem",
                                }}
                         
                                to=""
                                className="Search btn btn-large hoverable blue accent-3">
                                Search</Link>

                                   
                                </form>
                            </div>
                            <div className="card-content">
                                {this.props.activities.activities.map(item => {
                                    return (
                                        <div className="container">
                                            {/* name of the event */}
                                            <div>{item.name}</div>
                                            <div>{`Description: ${item.description}`}</div>
                                            <div>{`Location: ${item.location.address1} ${item.location.city} ${item.location.state} ${item.location.zipcode}}`}</div>
                                            <a target="_blank" href={`${item.event_site_url}`}>{`Event Link: ${item.event_site_url}`}</a>
                                            <button class="btn waves-effect waves-light" type="submit" name="action">Add to Planner
                                                <i class="material-icons right">send</i>
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
SearchActivity.propTypes = {
    getActivitiesByAddress: PropTypes.func.isRequired,
    activities: PropTypes.object
};

const mapStateToProps = state => ({
    auth: state.auth,
    activities: state.activities
});

export default connect(
    mapStateToProps,
    { getActivitiesByAddress }
)(SearchActivity);


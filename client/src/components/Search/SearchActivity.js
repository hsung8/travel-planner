import React, { Component, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import PropTypes from "prop-types";
import { getActivitiesByAddress, addActivitiesToMongo } from "../../actions/activitiesActions"
import { v4 as uuidv4 } from 'uuid';


class SearchActivity extends Component {
    state = {
        searchTerm: "",
    }

    handleSearchEvent = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    renderResult = (state) => {
        if (state.default) {
            return <div>{state.default}</div>
        }
        else if (state.length === 0) {
            return <div>No information found</div>
        }
        else {
            //map thru every event in the array
            return this.props.activities.activities.map(item => {
                //create a unique key for each event
                const key = uuidv4()
                return (<div key={key}>
                    <ul className="container" >
                        {/* event name */}
                        <li><a target="_blank" href={`${item.event_site_url}`}>{item.name}</a></li>
                        {/* event description */}
                        <li>{item.description}</li>
                        {/* event location */}
                        <li>{`Location: ${item.location.address1} ${item.location.city} ${item.location.state} ${item.location.zip_code}`}</li>
                        {/* event cost */}
                        <li>cost: {item.is_free ? "free event" : `$ ${item.cost === null ? `to be announced` : item.cost}`}</li>
                        {/* button to save */}
                        {this.props.activities.selected.indexOf(key) === parseInt(-1) ? 
                        <button id={key} className="btn waves-effect waves-light" type="submit" name="action"
                        onClick={(event) => {
                            event.preventDefault();
                            //ADD THE USER to the activities data so mongoose can locate the user based on _userID
                            item.user = this.props.auth.user.id;
                            item.key = key
                            console.log("this come from line 80 of SearchActivity.js to console.log data to be send to mongo from the front end react", item);
                            this.props.addActivitiesToMongo(item);
                            
                        }}>Add to Planner
                        <i className="material-icons right">send</i>
                    </button>
                    :
                    <div></div>
                    }
                        
                    </ul>
                    <br></br>
                    <br></br>
                </div>
                );
                
                
            })
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col s12 center-align">
                    <div className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-header">
                                <Link
                                    to="/hotel"
                                    className="btn btn-large hoverable green accent-3"
                                    style={{
                                        marginRight: 10
                                    }}
                                >HOTELS</Link>
                                <Link to="/flights"
                                    className="btn btn-large hoverable blue accent-3"
                                    style={{
                                        marginRight: 10
                                    }}
                                >FLIGHTS</Link>
                                <Link to="/rental"
                                    className="btn btn-large hoverable black accent-3"
                                    style={{
                                        marginRight: 10
                                    }}
                                >RENTAL CARS</Link>
                                <Link to="/activity"
                                    className="btn btn-large hoverable orange accent-3"
                                    style={{
                                        marginRight: 10
                                    }}
                                >ACTIVITIES</Link>
                                <br />
                                <form onSubmit={(event) => {
                                    event.preventDefault();
                                    console.log("form successuflly submitted");
                                    this.props.getActivitiesByAddress(this.state.searchTerm)
                                }}>
                                    <input onChange={this.handleSearchEvent} value={this.state.searchTerm} name="activitiesSearch" type="text" className="address" placeholder="Search an address or city for fun events to do!!!"></input>

                                    <br />
                                    <button
                                        type="submit"
                                        className="Search btn btn-large hoverable blue accent-3">
                                        Search </button>
                                </form>
                            </div>
                            <div className="card-content">
                                {this.renderResult(this.props.activities.activities)}
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
    addActivitiesToMongo: PropTypes.func.isRequired,
    activities: PropTypes.object,
    selected : PropTypes.array

};

const mapStateToProps = state => ({
    auth: state.auth,
    activities: state.activities,
    selected: state.selected
});

export default connect(
    mapStateToProps,
    { getActivitiesByAddress, addActivitiesToMongo }
)(SearchActivity);


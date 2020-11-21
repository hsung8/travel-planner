import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSavedHotels, deleteHotel } from "../../actions/hotelAction";

class HotelTable extends Component {
  componentDidMount() {
    this.props.getSavedHotels(this.props.auth.user.id);
  }

  renderTableData() {
    return this.props.hotels.map((hotel, index) => {
      const name = hotel.hotel.name;
      const address = hotel.hotel.address.lines;
      const contact = hotel.hotel.contact.phone;
      const ratings = hotel.hotel.rating;
      const id = hotel.hotel.hotelId;
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{address}</td>
          <td>{contact}</td>
          <td>{ratings}</td>
          <td>
            <button
              onClick={(event) => {
                event.preventDefault();
                this.props.deleteHotel(id, this.props.auth.user.id);
              }}
              className="btn"
              type="btn btn-small"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = ["Hotel", "Address", "Phone", "Ratings", "Delete"];
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

HotelTable.propTypes = {
  hotels: PropTypes.array,
  getSavedHotels: PropTypes.func,
  deleteHotel: PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  hotels: state.hotel.savedHotels,
});

export default connect(mapStateToProps, { getSavedHotels, deleteHotel })(
  HotelTable
);

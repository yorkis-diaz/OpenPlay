import React from "react";
import ReservationTimes from "../reservations/reservation_times";
import { withRouter } from 'react-router-dom'

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      requestedDate: `${new Date().getFullYear()}-${
        new Date().getMonth() + 1 < 10
          ? `0${new Date().getMonth() + 1}`
          : new Date().getMonth() + 1
      }-${new Date().getDate()}`,
      time: `${new Date().getHours()}`,
      numParticipants: "2",
      searchInput: "",
      searched: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    this.setState({
      date: new Date(),
      requestedDate: `${new Date().getFullYear()}-${
        new Date().getMonth() + 1 < 10
          ? `0${new Date().getMonth() + 1}`
          : new Date().getMonth() + 1
      }-${new Date().getDate()}`,
      time: `${new Date().getHours()}`,
      numParticipants: "2",
      searched: false
    });
  }

  handleChange(value) {
    return e => {
      this.setState({
        [value]: e.target.value,
        searched: false
      });
    };
  }

  handleToggle(e) {
    e.preventDefault();
    if (this.state.searched === false) {
      this.setState({
        searched: true
      });
    } else {
      this.setState({
        searched: false
      });
    }
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.receiveReservationInfo(Object.assign({}, this.state));
    this.setState({
      searched: true
    });
  }

  makePeopleOptions() {
    return [...Array(20).keys()].map(num => {
      let start = num + 1;
      if (start === 1) {
        return <option key={start} value={start}>{start} Person</option>;
      } else {
        return <option key={start} value={start}>{start} People</option>;
      }
    });
  }

  makeTimeOptions() {
    return [...Array(24).keys()].map(num => {
      if (num === 0) {
        return (
          <option key={num} value={num}>12:00 AM</option>
        );
      } else if (num === 12) {
        return (
          <option key={num} value={num}>12:00 PM</option>
        );
      } else if (num > 12) {
        return (
          <option key={num} value={num}>{num - 12}:00 PM</option>
        );
      } else {
        return (
          <option key={num} value={num}>{num}:00 AM</option>
        );
      }
    });
  }

  convertDate() {
    const { date } = this.state;
    let month = date.getMonth() + 1;
    return `${date.getFullYear()}-${
      month < 10 ? `0${month}` : month
    }-${date.getDate()}`;
  }

  render() {
    const { date } = this.state;
    const today = this.convertDate()

    const people = this.makePeopleOptions();
    const time = this.makeTimeOptions();

    const ReservationTimesWithRouter = withRouter(ReservationTimes);

    return (
      <div className="reservation-form">
        <h1>Make a reservation</h1>
        <div className="reservation-form-outer-div">
          <label className="party-size-div">
            <h2>Party Size</h2>
            <select
              className="party-select"
              onChange={this.handleChange("numParticipants")}
            >
              {people}
              <option value="Large Group">Large Group</option>
            </select>
          </label>
          <label className="date-label">
            <h2>Date</h2>
            <input
              className="date-input"
              onChange={this.handleChange("requestedDate")}
              type="date"
              min={today}
              defaultValue={today}
            />
          </label>
          <label className="time-label">
            <h2>Time</h2>
            <select
              className="time-select"
              defaultValue={this.state.date.getHours()}
              onChange={this.handleChange("time")}
            >
              {time}
            </select>
          </label>

          {this.state.searched === false ? (
            <button onClick={this.handleSearch}>Find an Event</button>
          ) : (
            <ReservationTimesWithRouter
              event={this.props.event}
              receiveReservationInfo={this.props.receiveReservationInfo}
              reservationInfo={this.props.reservationInfo}
              loggedIn={this.props.loggedIn}
              openModal={this.props.openModal}
              reservations={this.props.reservations}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ReservationForm;

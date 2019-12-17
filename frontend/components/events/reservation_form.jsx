import React from "react";
import ReservationTimes from "../reservations/reservation_times";

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      requestedDate: `${new Date().getFullYear()}-${new Date().getMonth() +
        1}-${new Date().getDate()}`,
      time: `${new Date().getHours()}:${new Date().getMinutes()} ${
        new Date().getHours() < 13 ? `AM` : `PM`
      }`,
      numParticipants: "2",
      searchInput: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      date: new Date(),
      requestedDate: `${new Date().getFullYear()}-${new Date().getMonth() +
        1}-${new Date().getDate()}`,
      time: `${new Date().getHours()}:${new Date().getMinutes()} ${
        new Date().getHours() < 13 ? `AM` : `PM`
      }`,
      numParticipants: "2",
    });
  }

  handleChange(value) {
    return e => {
      this.setState({
        [value]: e.target.value
      });
    };
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.searchEvents(this.state.searchInput).then(() => {
      this.props.history.push(`/search/${this.state.searchInput}`); //change
    });
  }

  makePeopleOptions() {
    return [...Array(20).keys()].map(num => {
      let start = num + 1;
      if (start === 1) {
        return <option value={start}>{start} Person</option>;
      } else {
        return <option value={start}>{start} People</option>;
      }
    });
  }

  makeTimeOptions() {
    return [...Array(24).keys()].map(num => {
      if (num === 0) {
        return (
          <>
            <option value={num}>12:00 AM</option>
          </>
        );
      } else if (num > 12) {
        return (
          <>
            <option value={num}>{num - 12}:00 PM</option>
          </>
        );
      } else {
        return (
          <>
            <option value={num}>{num}:00 AM</option>
          </>
        );
      }
    });
  }

  render() {
    const { date } = this.state;
    const today = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()}`;

    const people = this.makePeopleOptions();
    const time = this.makeTimeOptions();

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
          <label className="date=label">
            <h2>Date</h2>
            <input
              className="date-input"
              onChange={this.handleChange("requestedDate")}
              type="date"
              min={today}
              defaultValue={today}
            />
          </label>
          <label>
            <h2>Time</h2>
            <select
              className="time-select"
              onChange={this.handleChange("time")}
            >
              {time}
            </select>
          </label>
          {/* <button onClick={this.handleSearch}>Find an Event</button> */}
          <ReservationTimes
            event={this.props.event}
            receiveReservationInfo={this.props.receiveReservationInfo}
            reservationInfo={this.props.reservationInfo}
          />
        </div>
      </div>
    );
  }
}

export default ReservationForm;

import React from "react";

class ResultSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      requestedDate: `${new Date().getFullYear()}-${new Date().getMonth() +
        1}-${new Date().getDate()}`,
      time: `${new Date().getHours()}`,
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
      time: `${new Date().getHours()}`,
      numParticipants: "2",
      searchInput: "New York"
    });
  }

  componentDidUpdate(prev) {
    if (prev.location.pathname !== this.props.location.pathname) {
      this.setState({
        date: new Date(),
        requestedDate: `${new Date().getFullYear()}-${new Date().getMonth() +
          1}-${new Date().getDate()}`,
        time: `${new Date().getHours()}`,
        numParticipants: "2"
      });
    }
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
    let search = this.state.searchInput.split(" ")
    let capitalize = search.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")
    this.props.searchEvents(capitalize).then(() => {
      this.props.receiveReservationInfo(Object.assign({}, this.state));
      this.props.history.push(`/search/${capitalize}`);
    });
  }

  makePeopleOptions() {
    return [...Array(20).keys()].map(num => {
      let start = num + 1;
      if (start === 1) {
        return (
          <option key={start} value={start}>
            {start} Person
          </option>
        );
      } else {
        return (
          <option key={start} value={start}>
            {start} People
          </option>
        );
      }
    });
  }

  makeTimeOptions() {
    return [...Array(24).keys()].map(num => {
      if (num === 0) {
        return (
          <option key={0} value={0}>
            12:00 AM
          </option>
        );
      } else if (num === 12) {
        return (
          <>
            <option key={num} value={num}>
              12:00 PM
            </option>
          </>
        );
      } else if (num > 12) {
        return (
          <option key={num} value={num}>
            {num - 12}:00 PM
          </option>
        );
      } else {
        return (
          <option key={num} value={num}>
            {num}:00 AM
          </option>
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

    return (
      <div className="result-search-form">
        <div className="result-outer-div">
          <div className="result-form-selects">
            <input
              className="search-result-bar-date"
              onChange={this.handleChange("requestedDate")}
              type="date"
              min={today}
              defaultValue={today}
            />
            <span className="result-select-containers">
              <select
                defaultValue={this.state.date.getHours()}
                onChange={this.handleChange("time")}
              >
                {time}
              </select>
            </span>
            <select onChange={this.handleChange("numParticipants")}>
              {people}
              <option key="21" value="Large Group">Large Group</option>
            </select>
          </div>
          <input
            onChange={this.handleChange("searchInput")}
            type="text"
            placeholder="Location, Event, or Type"
          />
          <button onClick={this.handleSearch}>Find an Event</button>
        </div>
      </div>
    );
  }
}

export default ResultSearchBar;

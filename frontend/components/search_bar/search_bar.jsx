import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        date: new Date(),
        requestedDate: `${new Date().getFullYear()}-${new Date().getMonth() +
          1}-${new Date().getDate()}`,
        time: `${new Date().getHours()}:${new Date().getMinutes()} ${(new Date().getHours() < 13) ? `AM` : `PM`}`,
        numParticipants: "2",
        searchInput: ""
      };
      this.handleSearch = this.handleSearch.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount () {
      this.setState({
        date: new Date(),
        requestedDate: `${new Date().getFullYear()}-${new Date().getMonth() +
          1}-${new Date().getDate()}`,
        time: `${new Date().getHours()}:${new Date().getMinutes()} ${
          new Date().getHours() < 13 ? `AM` : `PM`
        }`,
        numParticipants: "2",
        searchInput: ""
      });
    }

    handleChange(value) {
      return (e) => {
        this.setState({
          [value]: e.target.value
        })
      }
    }

    handleSearch (e) {
      e.preventDefault();
      this.props.searchEvents(this.state.searchInput).then(() => {
        this.props.history.push(`/search/${this.state.searchInput}`);
      })
    }

    makePeopleOptions () {
      return [...Array(20).keys()].map(num => {
        let start = num + 1;
        if (start === 1) {
          return <option value={start}>{start} Person</option>;
        } else {
          return (
            <option
              value={start}
            >
              {start} People
            </option>
          );
        }
      });
    }

    makeTimeOptions () {
      return [...Array(24).keys()].map(num => {
        if (num === 0) {
          return (
            <>
              <option value={`12:00 AM`}>12:00 AM</option>
              <option value={`12:30 AM`}>12:30 AM</option>
            </>
          );
        } else if (num > 12) {
          return (
            <>
              <option value={`${num - 12}:00 AM`}>{num - 12}:00 AM</option>
              <option value={`${num - 12}:30 AM`}>{num - 12}:30 AM</option>
            </>
          );
        } else {
          return (
            <>
              <option value={`${num}:00 AM`}>{num}:00 AM</option>
              <option value={`${num}:30 AM`}>{num}:30 AM</option>
            </>
          );
        }
      });
    }


    render () {
        const { date } = this.state
        const today = `${date.getFullYear()}-${date.getMonth() +
          1}-${date.getDate()}`;

        const people = this.makePeopleOptions()
        const time = this.makeTimeOptions()

        return (
          <div className="search-form">
            <h1>Find your event for any occasion</h1>
            <div className="outer-div">
              <div className="form-selects">
                <input 
                  onChange={this.handleChange("requestedDate")}
                  type="date" min={today} 
                  defaultValue={today} />
                <span className="select-containers">
                  <select onChange={this.handleChange("time")}>
                    {time}
                  </select>
                </span>
                <select onChange={this.handleChange("numParticipants")}>
                  {people}
                  <option value="Large Group">Large Group</option>
                </select>
              </div>
              <input
                onChange={this.handleChange("searchInput")}
                type="text"
                placeholder="Location, Event, or Type"
              />
              <button onClick={this.handleSearch}>Let's go</button>
            </div>
          </div>
        );
    }
}

export default SearchBar;
import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    handleSearch () {
      e.preventDefault();
    }


    render () {
        const { date } = this.state
        const today = `${date.getFullYear()}-${date.getMonth() +
          1}-${date.getDate()}`;

        return (
          <div className="search-form">
            <h1>Find your event for any occasion</h1>
            <div className="outer-div">
              <div className="form-selects">
                <input type="date" min={today} defaultValue={today} />
                <span className="select-containers">
                  <select>
                    <option>1:00 PM</option>
                  </select>
                </span>
                <select name="" id="">
                  <option>1 Person</option>
                </select>
              </div>
              <input
                type="text"
                name=""
                placeholder={`${date.getFullYear()}/${date.getMonth() +
                  1}/${date.getDate()}`}
              />
              <button>Let's go</button>
            </div>
          </div>
        );
    }
}

export default SearchBar;
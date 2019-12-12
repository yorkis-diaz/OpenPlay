import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }


    render () {
        return (
            <div className="search-form">
                <h1>Find your event for any occasion</h1>
                {/* <form>
                    <input type="date" min={}/>
                </form> */}
            </div>
            
        )
    }
}

export default SearchBar;
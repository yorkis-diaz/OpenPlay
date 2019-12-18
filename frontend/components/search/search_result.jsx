import React from 'react';
import SearchResultItem from './search_result_item';
import ResultSearchBarContainer from './result_search_bar_container';
import { Link } from 'react-router-dom';


class SearchResult extends React.Component {
    constructor (props) {
      super(props)

    }
    

    


    render () {
      const { events } = this.props
      const eventLis = events.map((event) => {
        return (
          <SearchResultItem
            key={event.id}
            event={event}
            receiveReservationInfo={this.props.receiveReservationInfo}
            reservationInfo={this.props.reservationInfo}
            loggedIn={this.props.loggedIn}
            openModal={this.props.openModal}
          />
        );
      })
      if (events.length > 0) {
        return (
            <>
                <ResultSearchBarContainer/>
                <div className="search-results-container">
                    <aside className="search-aside">
                        <map name="">
                            Map Link Goes Here
                        </map>
                        <div>
                            Filters
                        </div>
                    </aside>
                    <ul className="search-ul">
                        {eventLis}
                    </ul>
                </div>
            </>
        )
      } else {
        return (
          <>
            <ResultSearchBarContainer />
            <div className="search-results-container">
              <aside className="search-aside">
                <map name="">Map Link Goes Here</map>
                <div>Filters</div>
              </aside>
              <ul className="no-search-ul">
                <h1>we did not find a match for youe search</h1>
                <h2>
                  Sorry, we couldn't find any results for "
                  <span>{this.props.match.params.searchQuery}</span>". Try
                  checking your spelling or using less specific keywords.
                  There are no events with availability within 30 miles of
                  your search.
                </h2>
                <Link to="/" className="start-over-btn">
                  Main Page
                </Link>

                <h1>Other suggestions</h1>
                <Link
                  to="/search/New%20York"
                  className="redirect-search-link"
                >
                  Browse the list of all New York / Tri-State Area Events
                </Link>
              </ul>
            </div>
          </>
        );  
      }
  }
}

export default SearchResult;
import React from 'react';
import SearchResultItem from './search_result_item';
import ResultSearchBarContainer from './result_search_bar_container';


class SearchResult extends React.Component {
    constructor (props) {
        super(props)
    }

    


    render () {
        const { events } = this.props
        const eventLis = events.map((event) => {
            return (
                <SearchResultItem event={event} key={event.id}/>
            )
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
                    <ResultSearchBarContainer/>
                    <h1>Sorry nothing to see</h1>
                </>

            )  
        }
    }
}

export default SearchResult;
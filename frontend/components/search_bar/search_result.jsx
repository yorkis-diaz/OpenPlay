import React from 'react';
import SearchResultItem from './search_result_item';

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
        debugger
        return (
            <div className="search-results-container">
                <aside className="search-aside">
                    <map name="">

                    </map>
                    <div>
                        Filters
                    </div>
                </aside>
                <ul className="search-ul">
                    {eventLis}
                </ul>
            </div>
        )
    }
}

export default SearchResult;
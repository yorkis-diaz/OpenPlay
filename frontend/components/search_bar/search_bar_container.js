import { connect } from 'react-redux';
import { searchEvents } from '../../actions/event_actions';
import SearchBar from './search_bar';
import { receiveSearch } from '../../actions/search_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchEvents: (searchQuery) => dispatch(searchEvents(searchQuery)),
        receiveSearch: (seachQuery) => dispatch(receiveSearch(seachQuery))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
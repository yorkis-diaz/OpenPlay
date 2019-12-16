import { connect } from 'react-redux';
import { searchEvents } from '../../actions/event_actions';
import SearchBar from './search_bar';


const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchEvents: (searchQuery) => dispatch(searchEvents(searchQuery)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
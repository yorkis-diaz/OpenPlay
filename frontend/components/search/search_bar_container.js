import { connect } from 'react-redux';
import { searchEvents } from '../../actions/event_actions';
import SearchBar from './search_bar';
import { receiveReservationInfo } from '../../actions/reservation_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchEvents: (searchQuery) => dispatch(searchEvents(searchQuery)),
        receiveReservationInfo: (reservationInfo) => dispatch(receiveReservationInfo(reservationInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
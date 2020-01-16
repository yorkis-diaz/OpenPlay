import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchResult from './search_result';
import { searchEvents } from '../../util/selectors';
import { openModal } from '../../actions/modal_actions';
import { receiveReservationInfo } from '../../actions/reservation_actions';



const mapStateToProps = (state, ownProps) => {
    const query = ownProps.match.params.searchQuery
    const events = searchEvents(state.entities.events, query)
    const currentUser = state.session.currentUser;
    return {
      events,
      loggedIn: Boolean(currentUser),
      currentUser,
      reservationInfo: state.session.reservationInfo,
      reservations: state.entities.reservations
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        receiveReservationInfo: reservationInfo =>
        dispatch(receiveReservationInfo(reservationInfo))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResult));

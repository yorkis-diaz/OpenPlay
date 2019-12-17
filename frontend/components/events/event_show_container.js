import { connect } from 'react-redux';
import { fetchEvent } from '../../actions/event_actions'
import EventShow from './event_show';
import { createFavorite, deleteFavorite } from "../../actions/session_actions";
import { openModal } from '../../actions/modal_actions';
import { selectReviews } from '../../util/selectors';
import { receiveReservationInfo } from '../../actions/reservation_actions';


const mapStateToProps = (state, ownProps) => {
  const  id = ownProps.match.params.eventId;
  const event = state.entities.events[id];
  const currentUser = state.session.currentUser;
  let savedEventId = undefined;
  Object.values(state.session.savedEvents).forEach((savedEvent) => {
    if (savedEvent.event_id === parseInt(ownProps.match.params.eventId)) {
      savedEventId = savedEvent.id
    }
  });
  const eventReviews = selectReviews(
    state.entities.reviews,
    ownProps.match.params.eventId
  );
        
  return {
    loggedIn: Boolean(currentUser),
    currentUser,
    event,
    savedEventId,
    eventReviews,
    reviewers: state.entities.users,
    reservationInfo: state.session.reservationInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createFavorite: (user_id, event_id) =>
      dispatch(createFavorite(user_id, event_id)),
    deleteFavorite: favorite_id => dispatch(deleteFavorite(favorite_id)),
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    openModal: modal => dispatch(openModal(modal)),
    receiveReservationInfo: reservationInfo =>
      dispatch(receiveReservationInfo(reservationInfo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
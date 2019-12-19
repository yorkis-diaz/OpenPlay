import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/session_actions';
import BookReservation from './book_reservation';
import { openModal } from "../../actions/modal_actions";
import { createReservation } from '../../actions/reservation_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const { eventId } = state.session.reservationInfo
  const event = state.entities.events[eventId]

  return {
    event,
    loggedIn: Boolean(currentUser),
    currentUser,
    reservationInfo: state.session.reservationInfo,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    createReservation: (user_id, reservation) => dispatch(createReservation(user_id, reservation)),
    clearErrors: () => dispatch(clearErrors)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookReservation);

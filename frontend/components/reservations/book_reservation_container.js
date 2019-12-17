import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import BookReservation from './book_reservation';
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;

  return {
    loggedIn: Boolean(currentUser),
    currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookReservation);

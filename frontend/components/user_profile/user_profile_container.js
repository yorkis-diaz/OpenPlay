import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { deleteReservation } from "../../actions/reservation_actions";


const mapStateToProps = (state, ownProps) => {
  const { currentUser } = state.session
  return {
    currentUser,
    savedEvents: Object.values(state.session.savedEvents),
    reservations: Object.values(state.entities.reservations),
    events: state.entities.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteReservation: reservationId => dispatch(deleteReservation(reservationId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

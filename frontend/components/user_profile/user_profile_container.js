import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { deleteReservation } from "../../actions/reservation_actions";
import { fetchReviews } from "../../actions/reviews_actions";


const mapStateToProps = (state, ownProps) => {
  const { currentUser } = state.session

  return {
    currentUser,
    savedEvents: Object.values(state.session.savedEvents),
    reservations: Object.values(state.entities.reservations),
    events: state.entities.events,
    reviews: Object.values(state.entities.reviews)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteReservation: reservationId => dispatch(deleteReservation(reservationId)),
    fetchReviews: userId => dispatch(fetchReviews(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

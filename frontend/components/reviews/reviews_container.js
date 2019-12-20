import { connect } from 'react-redux';
import Reviews from './reviews';
import { fetchReservation } from '../../actions/reservation_actions';
import { createReview } from '../../actions/reviews_actions';
import { clearErrors } from '../../actions/session_actions';



const mapStateToProps = (state, ownProps) => {
    const reservation = state.entities.reservations[ownProps.match.params.reservationId]
    const event = state.entities.events[reservation.event_id] || {}
    return {
        reservation,
        event,
        currentUser: state.session.currentUser,
        errors: state.errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchReservation: (reservationId) => dispatch(fetchReservation(reservationId)),
        createReview: (review) => dispatch(createReview(review)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
import { connect } from 'react-redux';
import { updateReservation, deleteReservation } from '../../actions/reservation_actions';
import ReservationView from './reservation_view';


const mapStateToProps = (state, ownProps) => {
    // const { reservationId } = ownProps.match.params
    // const reservation = state.entities.reservations[reservationId]
    return {
        // reservation,
        // event: state.entities.events[reservation.event_id],
        // user: state.session.currentUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
        updateReservation: (reservationId) => dispatch(updateReservation(reservationId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationView);
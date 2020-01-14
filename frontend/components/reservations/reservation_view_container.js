import { connect } from 'react-redux';
import { updateReservation, deleteReservation, fetchReservation } from '../../actions/reservation_actions';
import ReservationView from './reservation_view';


const mapStateToProps = (state, ownProps) => {
    const { reservationId } = ownProps.match.params
    const reservation = state.entities.reservations[reservationId]
    const event = (reservation) ? state.entities.events[reservation.event_id] : {}
    return {
        reservation,
        event,
        user: state.session.currentUser,
        reservationInfo: state.session.reservationInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchReservation: (reservationId) => dispatch(fetchReservation(reservationId)),
        deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
        updateReservation: (reservationId) => dispatch(updateReservation(reservationId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationView);
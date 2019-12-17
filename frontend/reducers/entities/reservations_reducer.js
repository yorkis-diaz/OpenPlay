import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_RESERVATION, REMOVE_RESERVATION } from "../../actions/reservation_actions";

const ReservationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const { reservations } = action.currentUser;
      return Object.assign({}, reservations);

    case RECEIVE_RESERVATION:
      return Object.assign({}, state, { [action.reservation.id]: action.reservation})

    case REMOVE_RESERVATION:
      const newState = Object.assign({}, state);
      delete newState[action.reservationId];
      return newState;;

    case LOGOUT_CURRENT_USER:
      return {};

    default:
      return state;
  }
};

export default ReservationsReducer;

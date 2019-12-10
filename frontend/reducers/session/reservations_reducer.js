import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../../actions/session_actions";

const ReservationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const { reservations } = action.currentUser;
      return Object.assign({}, reservations);

    case LOGOUT_CURRENT_USER:
      return {};

    default:
      return state;
  }
};

export default ReservationsReducer;

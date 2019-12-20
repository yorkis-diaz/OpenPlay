import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS, 
} from "../../actions/session_actions";
import { RECEIVE_RESERVATION_ERRORS } from "../../actions/reservation_actions";
import { RECEIVE_REVIEWS_ERRORS } from "../../actions/reviews_actions";


const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;

    case CLEAR_ERRORS:
      return _nullErrors

    case RECEIVE_CURRENT_USER:
      return [];

    case RECEIVE_RESERVATION_ERRORS:
      return action.errors

    case RECEIVE_REVIEWS_ERRORS:
      return action.errors

    default:
      return state;
  }
};

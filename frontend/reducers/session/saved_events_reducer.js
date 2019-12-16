import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_FAVORITE } from "../../actions/session_actions";

const SavedEventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const { savedEvents } = action.currentUser
      return Object.assign({}, savedEvents);

    case RECEIVE_FAVORITE:
      const { favorite } = action
      return Object.assign({}, state, { [favorite.id]: favorite })

    case LOGOUT_CURRENT_USER:
      return {}

    default:
      return state;
  }
};

export default SavedEventsReducer;

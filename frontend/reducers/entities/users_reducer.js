import {
  RECEIVE_EVENT
} from "../../actions/event_actions";

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT:
      const { reviewers } = action.payload;
      const newState = Object.assign({}, state, reviewers);
      return newState;

    default:
      return state;
  }
};

export default UsersReducer;

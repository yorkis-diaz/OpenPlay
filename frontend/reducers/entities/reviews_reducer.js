import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT,
  RECEIVE_SEARCH
} from "../../actions/event_actions";

const EventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT:
      const { reviews } = action.payload;
      const newState = Object.assign({}, state, reviews);
      return newState;

    case RECEIVE_SEARCH:
      return Object.assign({}, state, action.searchQuery);

    default:
      return state;
  }
};

export default EventsReducer;

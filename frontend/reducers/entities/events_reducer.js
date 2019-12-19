import { RECEIVE_EVENTS, RECEIVE_EVENT, RECEIVE_SEARCH } from "../../actions/event_actions";
import { RECEIVE_RESERVATION } from "../../actions/reservation_actions";
import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";



const EventsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
      case RECEIVE_EVENTS:
        return action.events;

      case RECEIVE_EVENT:
        const { event } = action.payload;
        const newState = Object.assign({}, state, event);
        return newState;

      case RECEIVE_SEARCH:
        return Object.assign({}, state, action.searchQuery);

      case RECEIVE_RESERVATION:
        const nextState = Object.assign({}, state, action.payload.event);
        return nextState;

      case RECEIVE_CURRENT_USER:
        const { events } = action.payload.events;
        return Object.assign({}, state, events);

      default:
        return state;
    }
}

export default EventsReducer;
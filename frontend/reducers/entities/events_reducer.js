import { RECEIVE_EVENTS, RECEIVE_EVENT, RECEIVE_SEARCH } from "../../actions/event_actions";



const EventsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
      case RECEIVE_EVENTS:
        return action.events;

      case RECEIVE_EVENT:
        const { event } = action.payload
        const newState = Object.assign({}, state, event)
        return newState;

      case RECEIVE_SEARCH:
        debugger
        return Object.assign({}, state, action.searchQuery)

      default:
        return state;
    }
}

export default EventsReducer;
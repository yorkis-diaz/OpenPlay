export const RECEIVE_EVENTS = "RECEIVE_EVENTS"
export const RECEIVE_EVENT = "RECEIVE_EVENT";
import * as EventsUtil from '../util/events_util';


const receiveEvents = (events) => {
    return {
        type: RECEIVE_EVENTS,
        events
    }
}

const receiveEvent = payload => {
  return {
    type: RECEIVE_EVENT,
    payload
  };
};

export const fetchEvents = () => dispatch => {
    return EventsUtil.fetchEvents().then((events) => {
        dispatch(receiveEvents(events))
    })
}

export const fetchEvent = (eventId) => dispatch => {
  debugger
  return EventsUtil.fetchEvent(eventId).then(payload => {
    debugger
    dispatch(receiveEvent(payload));
  });
};

export const RECEIVE_EVENTS = "RECEIVE_EVENTS"
export const RECEIVE_EVENT = "RECEIVE_EVENT";
import * as EventsUtil from '../util/events_util';


const receiveEvents = (events) => {
  debugger
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
  return EventsUtil.fetchEvent(eventId).then(payload => {
    dispatch(receiveEvent(payload));
  });
};

export const searchEvents = search => dispatch => {
  debugger
  return EventsUtil.searchEvents(search).then(events => {
    debugger
    dispatch(receiveEvents(events));
  });
};

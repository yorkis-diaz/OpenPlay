export const RECEIVE_EVENTS = "RECEIVE_EVENTS"
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
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


export const receiveSearch = searchQuery => {
  return {
    type: RECEIVE_SEARCH,
    searchQuery
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
  return EventsUtil.searchEvents(search).then(searchQuery => {
    dispatch(receiveSearch(searchQuery));
  });
};

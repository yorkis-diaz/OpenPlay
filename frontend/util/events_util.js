export const fetchEvents = () => {
    return $.ajax({
      url: `/api/events`
    });
}

export const fetchEvent = (eventId) => {
    return $.ajax({
      url: `/api/events/${eventId}`
    });
}
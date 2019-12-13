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

export const searchEvents = (search) => {
  return $.ajax({
    url: "/api/search",
    data: { search }
  });
  
}
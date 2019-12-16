

export const selectEvents = (state) => {
    return Object.values(state)
}

export const searchEvents = (state, searchQuery) => {
    const search = Object.values(state)
    let events = [];
    search.forEach((event) => {
        if ((event.name.includes(searchQuery)) || (event.event_city.includes(searchQuery)) || (event.event_state.includes(searchQuery)) || (event.event_country.includes(searchQuery))) {
            events.push(event)
        }
    })
    return events
}

export const selectReviews = (state, eventId) => {
    const reviews = Object.values(state);
    const eventReviews = [];
    debugger
    reviews.forEach((review) => {
        if (review.event_id === parseInt(eventId)) {
            eventReviews.push(review);
        }
    })
    return eventReviews;
}


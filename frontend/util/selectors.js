

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


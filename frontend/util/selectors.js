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
    reviews.forEach((review) => {
        if (review.event_id === parseInt(eventId)) {
            eventReviews.push(review);
        }
    })
    return eventReviews;
}

export const checkIfExist = (reviews, userId, reservationId) => {
    if (!reviews) return;
    let exist = false;
    const allReviews = Object.values(reviews);
    allReviews.map(review => {
        if (review.reviewer_id === userId && review.reservation_id === reservationId) {
            exist = true;
        };
    })
    return exist
}

export const checkIfReserved = (reservations, eventId, time) => {
    const convertTime = (date) => {
        if (!date) {
            const newDate = new Date()
            let month =
                newDate.getMonth() + 1;
            let day = newDate.getUTCDate();
            let yr = newDate.getFullYear();
            return `${yr < 10 ? `0${yr}` : yr}:${month < 10 ? `0${month}` : month}:${
                day < 10 ? `0${day}` : day
                }`;
        } else {
            const newDate = new Date(date);
            let month =
                newDate.getMonth() + 1;
            let day = newDate.getUTCDate();
            let yr = newDate.getFullYear();
            return `${yr < 10 ? `0${yr}` : yr}:${month < 10 ? `0${month}` : month}:${
                day < 10 ? `0${day}` : day
                }`;
        }
    }
    let reserved = false
    const allReservations = Object.values(reservations)
    allReservations.forEach(reservation => {
        const newTime = new Date(reservation.time)
        let hr = newTime.getUTCHours();
        if (reservation.event_id === eventId && hr === time && convertTime() <= convertTime(reservation.date)) {
            reserved = true;
        };
    })
    return reserved
}



export const fetchFavorites = (user_id) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${user_id}/saved_events`,
    })
}

export const createFavorite = (user_id, event_id) => {
    return $.ajax({
        method: "POST",
        url: `/api/users/${user_id}/saved_events`,
        data: { event: {event_id} }
    })
}

export const deleteFavorite = (favorite_id) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/saved_events/${favorite_id}`
    });
};
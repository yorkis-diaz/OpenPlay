
export const createFavorite = (user_id, event_id) => {
    return $.ajax({
        method: "POST",
        url: `/api/users/${user_id}/saved_events`,
        data: { event: {event_id: event_id} }
    })
}

export const deleteFavorite = (user_id, favorite_id) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/users/${user_id}/saved_events/${favorite_id}`
    });
};
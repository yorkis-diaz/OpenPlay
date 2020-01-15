export const createReview = (review) => {
    return $.ajax({
        method: "POST",
        url: `/api/reservations/${review.reservation_id}/reviews`,
        data: { review }
    })
}

export const fetchReviews = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/reviews`,
    })
}


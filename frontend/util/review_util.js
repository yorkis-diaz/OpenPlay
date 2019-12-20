export const createReview = (review) => {
    return $.ajax({
        method: "POST",
        url: `/api/reservations/${review.reservation_id}/reviews`,
        data: { review }
    })
}


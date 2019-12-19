export const createReservation = (user_id, reservation) => {
  return $.ajax({
    method: "POST",
    url: `/api/users/${user_id}/reservations`,
    data: {reservation}
  });
};

export const fetchReservation = (reservationId) => {
    return $.ajax({
        method: "GET",
        url: `/api/reservations/${reservationId}`
    })
}

export const deleteReservation = (reservationId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/reservations/${reservationId}`
  });
};

export const updateReservation = reservationId => {
  return $.ajax({
    method: "PATCH",
    url: `/api/reservations/${reservationId}`
  });
};

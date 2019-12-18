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
        url: ``
    })
}

export const deleteReservation = () => {
  return $.ajax({
    method: "DELETE",
    url: ``
  });
};

export const updateReservation = () => {
  return $.ajax({
    method: "PATCH",
    url: ``
  });
};

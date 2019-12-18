export const createReservation = (reservation) => {
  return $.ajax({
    method: "POST",
    url: ``,
    data: {}
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

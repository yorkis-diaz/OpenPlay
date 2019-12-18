export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";
export const RECEIVE_INFO = "RECEIVE_INFO";
import * as ReservationUtil from '../util/reservation_util';



const receiveReservation = reservation => {
  return {
    type: RECEIVE_RESERVATION,
    reservation
  };
};

const removeReservation = (reservationId) => {
  return {
    type: REMOVE_RESERVATION,
    reservationId
  };
};

export const receiveReservationInfo = (reservationInfo) => {
    return {
        type: RECEIVE_INFO,
        reservationInfo
    }
}

export const createReservation = (user_id, reservation) => dispatch => {
  return ReservationUtil.createReservation(user_id, reservation).then(reservation => {
    dispatch(receiveReservation(reservation));
    return reservation
  });
};

export const fetchReservation = (reservationId) => dispatch => {
  return ReservationUtil.fetchReservation(reservationId).then(reservation => {
    dispatch(receiveReservation(reservation));
  });
};

export const updateReservation = reservationId => dispatch => {
  return ReservationUtil.updateReservation(reservationId).then(reservation => {
    dispatch(receiveReservation(reservation));
  });
};

export const deleteReservation = (reservationId) => dispatch => {
    return ReservationUtil.deleteReservation(reservationId).then(() => {
        dispatch(removeReservation(reservationId))
    })
}
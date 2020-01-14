import React from "react";
import { Link } from "react-router-dom";

const ProfileReservationItem = ({ reservation, event, completed, deleteReservation }) => {
    const date = new Date(reservation.date).toDateString();
    // const time = new Date(reservation.date).toLocaleTimeString();
    const newTime = new Date(reservation.time)
    let hr = (newTime.getUTCHours() > 12) ? newTime.getUTCHours() - 12 : newTime.getUTCHours();
    let min = newTime.getUTCMinutes()
    let sec = newTime.getUTCSeconds()
    const display =  `${hr}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec} ${
      newTime.getUTCHours() >= 12 ? "PM" : "AM"
    }`;
  return (
    <li className="res-info">
        <img src={event.photoUrl} />
        <article className="res-content">
            <h2>{event.name}</h2>
            <p>
                {reservation.date}, {display}
            </p>
            <p>
                {reservation.num_participants === 1
                ? "Reservation for 1 Person"
                : `Reservation for ${reservation.num_participants} People`}
            </p>
            {(completed === false) ? (<button
                onClick={() => deleteReservation(reservation.id)}
                className="cancellation-btn"
            >
                Cancel
            </button>) : (
                <Link className="review-link" to={`/reviews/${reservation.id}`}>Leave a Review</Link>
            )}
            
        </article>
    </li>
  );
};
export default ProfileReservationItem;

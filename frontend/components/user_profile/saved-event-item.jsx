import React from "react";
import { Link } from "react-router-dom";

const ProfileReservationItem = ({ savedEvent, event, deleteFavorite }) => {
    return (
        <li className="saved-events-info">
            <img src={event.photoUrl} />
            <article className="saved-events-content">
                <h2>{event.name}</h2>
                <button
                    onClick={() => deleteFavorite(savedEvent.id)}
                    className="unsave-btn"
                >
                    Unsave this event
                </button>
                <p>
                    {date}, {time}
                </p>
                <p>
                    {reservation.num_participants === 1
                        ? "Reservation for 1 Person"
                        : `Reservation for ${reservation.num_participants} People`}
                </p>
                {(completed === false) ?  : ""}

            </article>
            
        </li>
    );
};
export default ProfileReservationItem;
import React from "react";
import { Link } from "react-router-dom";

const SavedEventItem = ({ savedEvent, event, deleteFavorite }) => {
    return (
        <li className="saved-events-info">
            <Link to={`/events/${event.id}`} className="saved-image-link">
                <img src={event.photoUrl} />
            </Link>
            
            <article className="saved-events-content">
                <Link to={`/events/${event.id}`}>{event.name}</Link>
                <button
                    onClick={() => deleteFavorite(savedEvent.id)}
                    className="unsave-btn"
                >
                    Unsave this event
                </button>

            </article>
            
        </li>
    );
};
export default SavedEventItem;
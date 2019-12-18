import React from 'react';
import { Link } from 'react-router-dom'

const HomepageEventItem = ({ event }) => {
    let affordable;
    if (event.cost < 10) {
        affordable = "$"
    } else if (event.cost < 20) {
        affordable = "$$"
    } else {
        affordable = "$$$"
    }
    return (
      <Link to={`/events/${event.id}`}>
            <div  className="homepage-event-item">
                <img
                    src={event.photoUrl}
                    alt={event.event_type}
                />
                <div className="event-details">
                    <h1>{event.name}</h1>
                    <p>{event.reviews_count} reviews</p>
                    <p>Rating Goes here</p>
                    <p>
                    {event.event_type} • {affordable} • {event.event_city}
                    </p>
                </div>
            </div>
      </Link>
    );
}
// "•"
export default HomepageEventItem;
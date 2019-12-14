import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultItem = (event) => {
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
            <li className="search-item" key={event.id}>
                <img src="https://ae01.alicdn.com/kf/HTB1qIMKexGYBuNjy0Fnq6x5lpXaa/Bright-Indoor-basketball-court-sport-arena-light-backdrop-Vinyl-cloth-High-quality-Computer-print-wall-Background.jpg"/>
                <div className="event-details">
                    <h1>{event.name}</h1>
                    <p>Rating Goes here</p>
                    <p>
                        {event.event_type} • {affordable} • {event.event_city}
                    </p>
                    <ul className="timeslots">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </li>
        </Link>
    )

}


export default SearchResultItem;
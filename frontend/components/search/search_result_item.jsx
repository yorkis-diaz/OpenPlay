import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReservationTimes from '../reservations/reservation_times';

const SearchResultItem = (props) => {
  const { event } = props
    let affordable;
    if (event.cost < 10) {
        affordable = "$"
    } else if (event.cost < 20) {
        affordable = "$$"
    } else {
        affordable = "$$$"
    }

    const ReservationTimesWithRouter = withRouter(ReservationTimes);
    return (
      <li className="search-item" key={event.id}>
        <Link to={`/events/${event.id}`}>
          <img src={event.photoUrl} alt={event.event_type}/>
        </Link>
        <div className="search-event-details">
          <Link className="event-name" to={`/events/${event.id}`}>
            {event.name}
          </Link>
          <div className="event-rating">
            <div>
              <span key="1" className={`rating-star ${(event.rating >= 1 && event.reviews_count !== 0) ? `star` : ``}`}></span>
              <span key="2" className={`rating-star ${(event.rating >= 2 && event.reviews_count !== 0) ? `star` : ``}`}></span>
              <span key="3" className={`rating-star ${(event.rating >= 3 && event.reviews_count !== 0) ? `star` : ``}`}></span>
              <span key="4" className={`rating-star ${(event.rating >= 4 && event.reviews_count !== 0) ? `star` : ``}`}></span>
              <span key="5" className={`rating-star ${(event.rating >= 5 && event.reviews_count !== 0) ? `star` : ``}`}></span>
            </div>
            <div className="rating-count">
                <Link to={`/events/${event.id}`}>({event.reviews_count})</Link>
            </div>

          </div>
          {/* <p className="event-rating">{event.rating} Rating</p> */}
          <p className="event-subdetail">
            <span>{affordable}</span> • {event.event_type} • {event.event_city}
          </p>
          <ul className="timeslots">
            <ReservationTimesWithRouter
              event={props.event}
              receiveReservationInfo={props.receiveReservationInfo}
              reservationInfo={props.reservationInfo}
              loggedIn={props.loggedIn}
              openModal={props.openModal}
            />
          </ul>
        </div>
      </li>
    );

}


export default SearchResultItem;
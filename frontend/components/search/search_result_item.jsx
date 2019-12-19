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


    // const opens = new Date(event.participation_open_time)
    // const close = new Date(event.participation_close_time)
    // 
    // const start_hour =
    //   (opens.getUTCHours() < 13) ? opens.getUTCHours() : (opens.getUTCHours() - 12);
    return (
      <li className="search-item" key={event.id}>
        <Link to={`/events/${event.id}`}>
          <img src={event.photoUrl} alt={event.event_type}/>
        </Link>
        <div className="search-event-details">
          <Link className="event-name" to={`/events/${event.id}`}>
            {event.name}
          </Link>
          <p className="event-rating">{event.rating} Rating</p>
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
{/* 
            <Link to="/">
              <li>
                {start_hour}:{opens.getUTCMinutes()}0
              </li>
            </Link>

            <Link to="/">
              <li>
                {start_hour + event.event_duration}:{opens.getUTCMinutes()}0
              </li>
            </Link>
            <Link to="/">
              <li>
                {start_hour + event.event_duration + event.event_duration}:
                {opens.getUTCMinutes()}0
              </li>
            </Link> */}
          </ul>
        </div>
      </li>
    );

}


export default SearchResultItem;
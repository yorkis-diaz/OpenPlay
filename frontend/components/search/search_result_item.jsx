import React from 'react';
import { Link } from 'react-router-dom';
import ReservationTimes from '../reservations/reservation_times';

const SearchResultItem = (props) => {
  const { event } = props
  debugger
    let affordable;
    if (event.cost < 10) {
        affordable = "$"
    } else if (event.cost < 20) {
        affordable = "$$"
    } else {
        affordable = "$$$"
    }
    const opens = new Date(event.participation_open_time)
    const close = new Date(event.participation_close_time)
    const ReservationTimesWithRouter = withRouter(ReservationTimes);
    const start_hour =
      (opens.getUTCHours() < 13) ? opens.getUTCHours() : (opens.getUTCHours() - 12);
    return (
      <li className="search-item" key={event.id}>
        <Link to={`/events/${event.id}`}>
          <img src="https://ae01.alicdn.com/kf/HTB1qIMKexGYBuNjy0Fnq6x5lpXaa/Bright-Indoor-basketball-court-sport-arena-light-backdrop-Vinyl-cloth-High-quality-Computer-print-wall-Background.jpg" />
        </Link>
        <div className="search-event-details">
          <Link className="event-name" to={`/events/${event.id}`}>
            {event.name}
          </Link>
          <p className="event-rating">Rating Goes here</p>
          <p className="event-subdetail">
            <span>{affordable}</span> • {event.event_type} • {event.event_city}
          </p>
          <ul className="timeslots">
            <ReservationTimesWithRouter
              event={this.props.event}
              receiveReservationInfo={this.props.receiveReservationInfo}
              reservationInfo={this.props.reservationInfo}
              loggedIn={this.props.loggedIn}
              openModal={this.props.openModal}
            />

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
            </Link>
          </ul>
        </div>
      </li>
    );

}


export default SearchResultItem;
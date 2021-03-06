import React from 'react';
import { Link } from 'react-router-dom';
import ReservationForm from './reservation_form';
import ReviewItem from './review_item';
import OpenMap from '../map/map';

class EventShow extends React.Component {
  constructor (props) {
    super(props)
    

    this.handleFavorite = this.handleFavorite.bind(this)
  }

  componentDidMount () {
    const { eventId } = this.props.match.params;
    this.props.fetchEvent(eventId);
    scrollTo(0, 0)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.match.params.eventId !== this.props.match.params.eventId) {
      const { eventId } = this.props.match.params;
      this.props.fetchEvent(eventId);
    }
  }

  handleFavorite (e) {
    let { currentUser, event, savedEventId, loggedIn } = this.props;
    e.preventDefault();
    loggedIn ? null : this.props.openModal("login");
    if (savedEventId) {
      this.props.deleteFavorite(savedEventId)
    } else {
      this.props.createFavorite(currentUser.id, event.id);
    }
  }

  render() {
    const { event } = this.props
    if (!event) {
      return (
        <div>Event doesn't exist</div>
      );
    } else {
      const { eventReviews, reviewers } = this.props
      const reviewsLis = eventReviews.map((review, i) => {
        reviewers
        return (
          <ReviewItem key={i} review={review} reviewer={reviewers[review.reviewer_id]} event={event}/>
        )
      })
      return (
        <section className="event-show-container">
          {this.props.savedEventId ? (
            <button onClick={this.handleFavorite} className="favorited-btn">
              <span></span> Event Saved!
            </button>
          ) : (
            <button onClick={this.handleFavorite} className="favorite-btn">
              Save this event
            </button>
          )}
          <div className="event-image-container">
            <img src={event.photoUrl} alt={event.event_type} />
          </div>
          <div className="event-show-details">
            <main className="event-detail">
              <h1>{event.name}</h1>
              <section className="event-detail-main">
                <ul className="event-subdetail-ul">
                  <li className="event-rating">
                    <span key="1" className={`rating-star ${(event.rating >= 1 && event.reviews_count !== 0) ? `star` : ``}`}></span>
                    <span key="2" className={`rating-star ${(event.rating >= 2 && event.reviews_count !== 0) ? `star` : ``}`}></span>
                    <span key="3" className={`rating-star ${(event.rating >= 3 && event.reviews_count !== 0) ? `star` : ``}`}></span>
                    <span key="4" className={`rating-star ${(event.rating >= 4 && event.reviews_count !== 0) ? `star` : ``}`}></span>
                    <span key="5" className={`rating-star ${(event.rating >= 5 && event.reviews_count !== 0) ? `star` : ``}`}></span>
                  </li>
                  <li>
                    <span className="review-chatbox"></span>
                    {eventReviews.length} {(eventReviews.length === 1) ? "Review" : "Reviews"}
                  </li>
                  <li>${event.cost} and under</li>
                  <li>Difficulty: {event.skill_level}</li>
                  <li>{event.event_type}</li>
                </ul>
                <article className="event-info">{event.info}</article>
              </section>
              <article className="event-detail-reviews">
                <h1>What People Are Saying</h1>
                <ul className="reviews-list">{reviewsLis}</ul>
              </article>
            </main>
            <aside className="event-show-aside">
              <div className="reservation-div">
                <ReservationForm
                  event={this.props.event}
                  receiveReservationInfo={this.props.receiveReservationInfo}
                  reservationInfo={this.props.reservationInfo}
                  loggedIn={this.props.loggedIn}
                  openModal={this.props.openModal}
                  reservations={this.props.reservations}
                />
              </div>
              <div className="maps-container">
                <map className="maps-show-page">
                  <OpenMap eventLat={event.lat} eventLng={event.lng} />
                </map>
                <p>
                  {event.address} {event.event_city}, {event.event_state}{" "}
                  {event.event_zipcode}
                </p>
              </div>
            </aside>
          </div>
        </section>
      );  
    }

      
  }
}

export default EventShow;
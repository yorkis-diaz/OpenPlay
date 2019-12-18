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
      const reviewsLis = eventReviews.map((review) => {
        reviewers
        return (
          <ReviewItem review={review} reviewer={reviewers[review.reviewer_id]} event={event}/>
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
            <img src="./assets/events/volleyball" alt="volleyball" />
          </div>
          <div className="event-show-details">
            <main className="event-detail">
              {/* <div className="navigation-menu">
                <button
                  onClick={() => scrollTo("event-detail-main")}
                ></button>
                <a ref="event-detail-main">Overview</a>
                <a href="#event-info">Photo</a>
                {/* <a href="">Reviews</a> */}
              {/* </div> */}
              <h1>{event.name}</h1>
              <section className="event-detail-main">
                <ul className="event-subdetail-ul">
                  <li>{event.rating} Rating</li>
                  <li>
                    <span className="review-chatbox"></span>
                    {eventReviews.length} Reviews
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
                />
              </div>
              {/* <OpenMap eventLat={event.lat} evenLng={event.lng}/>               */}
            </aside>
          </div>
        </section>
      );  
    }

      
  }
}

export default EventShow;
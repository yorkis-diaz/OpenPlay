import React from 'react';
import queryString from 'query-string';
import { Route } from 'react-router-dom';

class BookReservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate (prev) {
  }

  handleSubmit (e) {
    e.preventDefault();
    const { reservationInfo, currentUser } = this.props
    const reservationDetails = { 
      time: reservationInfo.requestedTime,
      num_participants: reservationInfo.numParticipants,
      date: reservationInfo.requestedDate, 
      participant_id: this.props.currentUser.id, 
      event_id: this.props.event.id,
      phone_number: this.state.phoneNumber
    }

    this.props.createReservation(currentUser.id, reservationDetails).then((reservation) => {

      this.props.history.push(`/reservation/view/${reservation.id}`)
    })
  }

  handleChange (value) {
    return (e) => {
      this.setState({
        [value]: e.target.value
      })
    }
  }

  render() {
    const { currentUser, loggedIn, event, reservationInfo } = this.props
    if (Object.values(reservationInfo).length === 0 ){
      return this.props.history.push("/")
    }
    return (
      <section className="book-page-container">
        <main className="book-page">
          <h1>You're almost done!</h1>
          <div className="reservation-info">
            <img src={event.photoUrl} alt={event.event_type}/>
            <article className="reservation-event-info">
              <h2>{event.name}</h2>
              <ul className="reservation-details">
                <li>{reservationInfo.requestedDate}</li>
                <li>{reservationInfo.requestedTime}</li>
                <li>{(reservationInfo.numParticipants === 1) ? (`${reservationInfo.numParticipants} Person`) : 
                  (`${reservationInfo.numParticipants} People`)}
                </li>
              </ul>
            </article>
          </div>
          <div className="reservation-page-form">
            {loggedIn ? (
              <h3>
                {currentUser.firstname} {currentUser.lastname} (
                <button onClick={() => this.props.openModal("login")}>
                  Not {currentUser.firstname}?
                </button>
                )
              </h3>
            ) : (
              <h3>
                <button onClick={() => this.props.openModal("login")}>
                  Sign in
                </button>{" "}
                or{" "}
                <button onClick={() => this.props.openModal("signup")}>
                  Sign up
                </button>{" "}
                to make this reservation
              </h3>
            )}
            <div className="reservation-inputs">
              <input type="text" placeholder="Phone Number" onChange={this.handleChange("phoneNumber")} />
              <input type="email" value={(loggedIn) ? currentUser.email : ""} disabled />
            </div>
            <button className="complete-reservation-btn" onClick={this.handleSubmit}>
              Complete reservation
            </button>
          </div>
        </main>
      </section>
    );
  }
}

export default BookReservation;
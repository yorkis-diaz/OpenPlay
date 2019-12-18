import React from 'react';
import queryString from 'query-string';

class BookReservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate (prev) {
    debugger
  }

  handleClick (e) {
    e.preventDefault();
    debugger
    const { reservationInfo } = this.props
    const reservationDetails = { 
      time: reservationInfo.requestedTime,
      num_participants: reservationInfo.numParticipants,
      date: reservationInfo.requestedDate, 
      participant_id: this.props.currentUser.id, 
      event_id: this.props.event.id
    }
    const reservation = Object.assign({}, this.state, reservationDetails)
    this.props.createReservation(reservation).then(() => {
      this.props.history.push("/")
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
            <figure></figure>
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
              <input type="text" placeholder="Phone Number" onChange={this.handleChange} required/>
              <input type="email" value={(loggedIn) ? currentUser.email : ""} disabled />
            </div>
            <button className="complete-reservation-btn" onClick={this.handleClick}>
              Complete reservation
            </button>
          </div>
        </main>
      </section>
    );
  }
}

export default BookReservation;
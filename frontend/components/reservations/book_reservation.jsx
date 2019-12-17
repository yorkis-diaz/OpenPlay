import React from 'react';
import queryString from 'query-string';

class BookReservation extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { currentUser, loggedIn } = this.props
    return (
      <section className="book-page-container">
        <main className="book-page">
          <h1>You're almost done!</h1>
          <div className="reservation-info">
            <figure></figure>
            <article className="reservation-event-info">
              <h2> Restaurant name</h2>
              <ul className="reservation-details">
                <li>reservation date</li>
                <li>reservation time</li>
                <li>reservation paticipant amount</li>
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
              <input type="text" placeholder="Phone Number" />
              <input type="email" value={(loggedIn) ? currentUser.email : ""} disabled />
            </div>
            <button className="complete-reservation-btn">
              Complete reservation
            </button>
          </div>
        </main>
      </section>
    );
  }
}

export default BookReservation;
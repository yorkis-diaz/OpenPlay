import React from "react";
import { Link } from "react-router-dom";
import ProfileReservationItem from "./profile_reservation_item";


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date
    }
  }

  componentDidMount() {
    this.setState({
      date: new Date
    })
  }

  render() {
    const { currentUser, reservations, events, deleteReservation } = this.props
    const upcomingRes = []
    const pastRes = [] 
    reservations.map((reservation) => {
      const currentDate = `${new Date().getFullYear()}/${
        new Date().getMonth() < 10
          ? `0${new Date().getMonth()}`
          : new Date().getMonth()
      }/${
        new Date().getDate() < 10
          ? `0${new Date().getDate()}`
          : new Date().getDate()
      }`;
      if (reservation.date < currentDate) {
        pastRes.push(
          <ProfileReservationItem
            key={reservation.id}
            reservation={reservation}
            event={events[reservation.event_id]}
            completed={true}
            deleteReservation={deleteReservation}
          />
        );
    } else {
        upcomingRes.push(
          <ProfileReservationItem
            key = { reservation.id }
            reservation={reservation}
            event={events[reservation.event_id]}
            completed={false}
            deleteReservation={deleteReservation}
          />
        );
      }
    });
    return (
      <>
        <div className="name-container">
          <h1 className="user-profile-name">{currentUser.firstname} {currentUser.lastname}</h1>
        </div>
        <section className="profile-container">
          <div className="navigation-menu">
            <Link to="/user/profile">Reservations</Link> 
            <Link to="/user/saved-events">Saved Events</Link>
            {/* <button>Account Detail</button> */}
          </div>
          <main className="profile-content">
            <ul className="upcoming-res-ul">
              <h1 >Upcoming Reservations</h1>
              {upcomingRes}
            </ul>
            <ul className="past-res-ul">
              <h1>Past Reservations</h1>
              {pastRes}
            </ul>
          </main>
        </section>
      </>
    )
  }
}


export default UserProfile;

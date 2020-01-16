import React from "react";
import { Link } from "react-router-dom";
import ProfileReservationItem from "./profile_reservation_item";


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.setState({
      date: new Date()
    });
    this.props.fetchReviews(this.props.currentUser.id)
  }

  convertTime(date) {
    if (!date) {
      const newDate = new Date()
      let month =
        newDate.getMonth() + 1;
      let day = newDate.getUTCDate();
      let yr = newDate.getFullYear();
      return `${yr < 10 ? `0${yr}` : yr}:${month < 10 ? `0${month}` : month}:${
        day < 10 ? `0${day}` : day
      }`;
    } else {
      const newDate = new Date(date);
      let month =
        newDate.getMonth() + 1;
      let day = newDate.getUTCDate();
      let yr = newDate.getFullYear();
      return `${yr < 10 ? `0${yr}` : yr}:${month < 10 ? `0${month}` : month}:${
        day < 10 ? `0${day}` : day
      }`;
    }
  }

  render() {
    const { currentUser, reservations, events, deleteReservation, reviews } = this.props;
    const upcomingRes = [];
    const pastRes = [];
    reservations.map(reservation => {
      // const currentDate = `${new Date().getFullYear()}/${
      //   new Date().getMonth() < 10
      //     ? `0${new Date().getMonth()}`
      //     : new Date().getMonth()
      // }/${
      //   new Date().getDate() < 10
      //     ? `0${new Date().getDate()}`
      //     : new Date().getDate()
      // }`;
      // const currentDate = new Date().getTime();
      // const resDate = new Date().getTime();
      if (this.convertTime(reservation.date) < this.convertTime()) {
        pastRes.push(
          <ProfileReservationItem
            key={reservation.id}
            reservation={reservation}
            event={events[reservation.event_id]}
            completed={true}
            deleteReservation={deleteReservation}
            reviews={reviews}

          />
        );
      } else {
        upcomingRes.push(
          <ProfileReservationItem
            key={reservation.id}
            reservation={reservation}
            event={events[reservation.event_id]}
            completed={false}
            deleteReservation={deleteReservation}
          />
        );
      }
    });
    pastRes.sort((res1, res2) => {
      const date1 = new Date(res1.props.reservation.date);
      const date2 = new Date(res2.props.reservation.date);
      return date2.getTime() - date1.getTime();
    });
    upcomingRes.sort((res1, res2) => {
      const date1 = new Date(res1.props.reservation.date);
      const date2 = new Date(res2.props.reservation.date);
      return date1.getTime() - date2.getTime();
    });
    return (
      <>
        <div className="name-container">
          <h1 className="user-profile-name">
            {currentUser.firstname} {currentUser.lastname}
          </h1>
        </div>
        <section className="profile-container">
          <div className="navigation-menu">
            <Link to="/user/profile">Reservations</Link>
            <Link to="/user/saved-events">Saved Events</Link>
          </div>
          <main className="profile-content">
            <ul className="upcoming-res-ul">
              <h1>Upcoming Reservations</h1>
              {upcomingRes}
            </ul>
            <ul className="past-res-ul">
              <h1>Past Reservations</h1>
              {pastRes}
            </ul>
          </main>
        </section>
      </>
    );
  }
}


export default UserProfile;

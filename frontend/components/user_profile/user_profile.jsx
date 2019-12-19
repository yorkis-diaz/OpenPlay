import React from "react";
import { Link } from "react-router-dom";
import ProfileReservationItem from "./profile_reservation_item";
import SavedEvents from "./saved_events";


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prev) {

  }




    render() {
      const { currentUser, reservations, savedEvents, events, deleteReservation } = this.props
      const upcomingRes = []
      const pastRes = [] 
        reservations.map((reservation) => {
            let reservationDate = new Date(reservation.date)
            if (reservationDate < new Date()) {
                pastRes.push(
                  <ProfileReservationItem
                    reservation={reservation}
                    event={events[reservation.event_id]}
                    completed={true}
                    deleteReservation={deleteReservation}
                  />
                );
            } else {
                upcomingRes.push(
                  <ProfileReservationItem
                    reservation={reservation}
                    event={events[reservation.event_id]}
                    completed={false}
                    deleteReservation={deleteReservation}
                  />
                );
            }
        })
        return (
            <>
                <div className="name-container">
                    <h1 className="user-profile-name">{currentUser.firstname} {currentUser.lastname}</h1>
                </div>
                <section className="profile-container">
                    <div className="navigation-menu">
                        <Link to="/user/profile">Reservations</Link> 
                        <Link>Saved Events</Link>
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
                {/* <SavedEvents savedEvents={savedEvents[0]}/> */}
            </>
        )
    }
}


export default UserProfile;

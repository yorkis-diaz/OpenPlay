import React from "react";
import { Link } from "react-router-dom";

const SavedEvents = ({ savedEvents, events, deleteFavorite, currentUser  }) => {
    const savedEventLis = savedEvents.map((savedEvent) => {
        return (
            <SavedEventsItem
                event={events[savedEvent.event_id]}
                deleteFavorite={deleteFavorite}
            />
        )
    });
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
                    <ul className="saved-events-ul">
                        <h1>SavedEvents</h1>
                        {savedEventLis}
                    </ul>
                </main>
            </section>
        </>
        
    );
};

export default SavedEvents;
import React from "react";
import { Link } from "react-router-dom";
import SavedEventItem from "./saved-event-item";

class SavedEvents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fetched: false
        }
    }

    componentDidMount() {
        const { currentUser, fetchFavorites } = this.props
        fetchFavorites(currentUser.id).then(() => {
            this.setState({
                fetched: true
            })
        })
        
    }

    render () {
        if (this.state.fetched === false) return null
        const { savedEvents, events, deleteFavorite, currentUser } = this.props
        const savedEventLis = savedEvents.map((savedEvent) => {
            return (
                <SavedEventItem
                    key={savedEvent.id}
                    currentUser={currentUser}
                    event={events[savedEvent.event_id]}
                    deleteFavorite={deleteFavorite}
                    savedEvent={savedEvent}
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
                        <Link to="/user/saved-events">Saved Events</Link>
                        {/* <button>Account Detail</button> */}
                    </div>
                    <main className="profile-content">
                        <ul className="saved-events-ul">
                            <h1>Saved Events</h1>
                            {savedEventLis}
                        </ul>
                    </main>
                </section>
            </>

        );

    }
};

export default SavedEvents;
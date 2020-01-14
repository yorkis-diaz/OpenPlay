import React from "react";



class ReservationView extends React.Component {
    constructor(props) {
        super(props);
        this.handleCancellation = this.handleCancellation.bind(this)
    }

    componentDidMount() {
        const { reservationId } = this.props.match.params;
        this.props.fetchReservation(reservationId);
    }

    componentDidUpdate(prevProps) {
        if (
        prevProps.match.params.reservationId !==
        this.props.match.params.reservationId
        ) {
        const { reservationId } = this.props.match.params;
        this.props.fetchReservation(reservationId);
        }
    }

    handleCancellation() {
        event.preventDefault();
        const { reservation } = this.props;
        this.props.deleteReservation(reservation.id).then(() => {
            this.props.history.push("/");
        });
    }

  render() {
        const { event, reservation, user } = this.props;
        if (!reservation) return null;
        // const date = new Date(reservation.date).toDateString();
        const time = new Date(reservation.date).toLocaleTimeString();
        const joinedYear = new Date(user.created_at).getFullYear();

        return (
        <section className="reservation-view-container">
            <div className="reservation-view-details">
            <div className="reservation-view-confirmation">
                <div className="view-confirmation-circle">✓</div>
                <p className="reservation-view-confirmation-text">
                Thanks! Your reservation is confirmed.
                </p>
            </div>
            <div className="reservation-view-event-info">
                <img src={event.photoUrl} />
                <article className="view-event-info">
                <h2>{event.name}</h2>
                <p>
                    {reservation.date}, {time}
                </p>
                <p>
                    {reservation.num_participants === 1
                    ? "1 Person"
                    : `${reservation.num_participants} People`}
                </p>
                <button className="cancellation-btn" onClick={this.handleCancellation}>Cancel</button>
                </article>
            </div>
            </div>
            <div className="reservation-view-user-info">
            <div className="view-user-name-circle">
                {user.firstname[0]} {user.lastname[0]}
            </div>
            <div className="view-user-info">
                <h1>
                {user.firstname} {user.lastname}
                </h1>
                <p>joined in {joinedYear}</p>
                <p>{event.event_state} Area</p>
            </div>
            </div>
        </section>
        );
    }
}



export default ReservationView;

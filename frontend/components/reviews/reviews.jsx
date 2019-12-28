import React from 'react';
import ErrorItem from '../user_forms/errors/error_item';



class Reviews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: "",
            body: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount () {
        this.props.clearErrors();
        const { reservation } = this.props
        this.props.fetchReservation(reservation.id)
    }

    handleChange(value) {
        return (e) => {
            this.setState({
                [value]: e.target.value
            })
        }
    }

    handleSubmit (e) {
        e.preventDefault();
        const { currentUser, reservation, event} = this.props
        const review = {
            reviewer_id: currentUser.id,
            reservation_id: reservation.id,
            event_id: event.id
        }
        this.props.clearErrors()
        this.props.createReview(Object.assign({}, this.state, review))
        this.props.history.push(`/events/${event.id}`)
    }



    render () {
        const { event, reservation } = this.props
        const date = new Date(reservation.date).toDateString();
        const time = new Date(reservation.date).toLocaleTimeString();
        let error
        if (this.props.errors.length > 0) {
            error = < ErrorItem
                error={true}
                message={this.props.errors[0]}
                style={"book-error"}
            />
        }
        return (
            <main className="reviews-page-container">
                
                <section className="reviews-page-content">
                    <h1>Review</h1>
                    <div className="review-res-detail">
                        <li className="review-res-info">
                            <img src={event.photoUrl} />
                            <article className="review-res-content">
                                <h2>{event.name}</h2>
                                <p>
                                    {date}, {time}
                                </p>
                                <p>
                                    {reservation.num_participants === 1
                                        ? "Reservation for 1 Person"
                                        : `Reservation for ${reservation.num_participants} People`}
                                </p>
                            </article>
                        </li>
                    </div>
                    {error}
                    <select className="review-rating" onChange={this.handleChange("rating")}>
                        <option disabled selected>--select rating--</option>
                        <option value="1">1 Star</option>
                        <option value="2">2 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="5">5 Stars</option>
                    </select>
                    <textarea 
                        placeholder="Enter review" 
                        className="review-input" cols="100" rows="100" 
                        onChange={this.handleChange("body")}>
                        
                    </textarea>
                    <button onClick={this.handleSubmit} className="review-button">Submit Review</button>
                </section>
            </main>
        )
    }
}

export default Reviews;
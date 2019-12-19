import React from 'react';

class Reviews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: ""
        }
    }



    render () {
        // const date = new Date(reservation.date).toDateString();
        // const time = new Date(reservation.date).toLocaleTimeString();
        return (
            <main className="reviews-page-container">
                
                <section className="reviews-page-content">
                    <h1>Review</h1>
                    <div className="review-res-detail">
                        {/* <li className="res-info">
                            <img src={event.photoUrl} />
                            <article className="res-content">
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
                        </li> */}
                    </div>
                    <select className="review-rating" >
                        <option disabled selected>--select rating--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <textarea placeholder="Enter review" className="review-input" cols="100" rows="100">
                        
                    </textarea>
                    <button className="review-button">Submit Review</button>
                </section>
            </main>
        )
    }
}

export default Reviews;
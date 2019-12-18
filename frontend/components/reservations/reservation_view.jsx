import React from "react";



const ReservationView = (props) => {

    return (
        <section className="reservation-view-container">
            <ul className="reservation-view-details">
                <li className="reservation-view-detail">
                    Reservation Details 
                </li>
                <li className="reservation-view-event-info">
                    restaurant details
                </li>  
            </ul>
            <div className="reservation-view-user-info">
                <div className="view-user-name-circle"></div>
                <div className="view-user-info">

                </div>
            </div>
        </section>
    )

}



export default ReservationView;

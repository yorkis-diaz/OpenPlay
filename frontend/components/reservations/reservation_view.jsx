import React from "react";



const ReservationView = (props) => {

    return (
      <section className="reservation-view-container">
        <div className="reservation-view-details">
          <div className="reservation-view-confirmation">
            <div className="view-confirmation-circle">✓</div>
            <p className="reservation-view-confirmation-text">
              Thanks! Your reservation is confirmed.
            </p>
          </div>
          <div className="reservation-view-event-info">restaurant details</div>
        </div>
        <div className="reservation-view-user-info">
          <div className="view-user-name-circle">name is here</div>
          <div className="view-user-info">
            <h1>user-name</h1>
            <p>joined in </p>
            <p>area</p>
            <p>num reviews</p>
          </div>
        </div>
      </section>
    );

}



export default ReservationView;

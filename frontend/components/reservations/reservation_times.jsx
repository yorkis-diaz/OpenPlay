import React from "react";



const ReservationTimes = (props) => {
    const {
      event, receiveReservationInfo, reservationInfo
    } = props
    const opens = new Date(event.participation_open_time).getUTCHours()
    const closes = new Date(event.participation_close_time).getUTCHours()
    const timeRange = []
    for(let i = opens; i < ((closes === 0) ? 24 : closes); i += event.event_duration) {
      timeRange.push(i)
    }
    const requestedRange = timeRange.filter((time) => time >= parseInt(reservationInfo.time))
    const hour = (event.event_duration === 1) ? "hour" : "hours"
    const convertTime = (time) => {
      if (!time) return ""
      if (time === 0) {
        return "12:00 AM"
      } else if (time < 12) {
        return `${time}:00 AM`
      } else if (time > 12) {
        return `${time - 12}:00 PM`
      } else {
        return "12:00 PM"
      }
    }
    const handleClick = (e) => {
      if (!props.loggedIn) {
        return props.openModal('login')
      }
      e.preventDefault();
      debugger
      const newState = Object.assign({}, reservationInfo, { requestedTime: e.target.value }, { eventId: event.id})
      receiveReservationInfo(newState)
      props.history.push("/reservation")
    }

    const buttonsLis = []
    for(let i = 0; i < 4; i++) {
      if (requestedRange[i]) {
        buttonsLis.push(
          <button
            key={i}
            className="times-btns"
            onClick={handleClick}
            value={convertTime(requestedRange[i])}
          >
            {convertTime(requestedRange[i])}
          </button>
        );
      } else {
      buttonsLis.push(
          <li className="no-times-btns" key={i}></li>
        )
      }
    }
    if (requestedRange.length === 0) {
      return (
        <article className="reservation-form-no-result">
          <span className="form-exclamation">!</span> 
          <p>At the moment, there’s no online availability 
          within {event.event_duration} {hour} of {convertTime(reservationInfo.time)} Have 
          another time in mind?</p>
        </article>
      );
    } else {
      return (
        <ul className="times-btns-ul">
          {buttonsLis}
        </ul>
      );
    }

}

export default ReservationTimes;

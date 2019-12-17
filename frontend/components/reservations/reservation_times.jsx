import React from "react";



const ReservationTimes = ({ event, receiveReservationInfo, reservationInfo}) => {
    const opens = new Date(event.participation_open_time).getUTCHours()
    const closes = new Date(event.participation_close_time).getUTCHours()
    const timeRange = []
    for(let i = opens; i < ((closes === 0) ? 24 : closes); i += event.event_duration) {
      timeRange.push(i)
    }

    debugger
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


    return (
      <ul className="times-btns-ul">
        <button className="times-btns">
          {convertTime(timeRange[0])}
        </button>
        <button className="times-btns">
          {convertTime(timeRange[1])}
        </button>
        <button className="times-btns">
          {convertTime(timeRange[2])}
        </button>
        <button className="times-btns">
          {convertTime(timeRange[3])}
        </button>
        <button className="times-btns">
          {convertTime(timeRange[4])}
        </button>
        <button className="times-btns">
          {convertTime(timeRange[5])}
        </button>
      </ul>
    );

}

export default ReservationTimes;

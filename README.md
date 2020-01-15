# OpenPlay

OpenPlay is a reservations website that connects people to local events in which
they want to participate in. It lets users browse through different events of 
all skill levels.

<img src="https://open-play-seed.s3.amazonaws.com/+openplay1.gif" width="800"/>
<!-- ![Homepage](https://open-play-seed.s3.amazonaws.com/+openplay1.gif) -->

OpenPlay is hosted at [OpenPlay link](https://open-play1.herokuapp.com)



## Technologies
---
* Ruby / Rails
* PostgreSQL
* Javascript
* React / Redux
* AWS
* CSS / SCSS
* Webpack


## Key Features
---

[Document Design](https://github.com/yorkis-diaz/OpenPlay/wiki)

## Reservations
* Users can search for an event based on Date, Time, How many will Participate and Locations
* Users will see Times available at or after their desired time
* Time slots will be displayed based on the duration of each event

Main challenge was doing time conversion with the user input time and the event time in the database. I created a component just to handle this logic

![reservation](https://open-play-seed.s3.amazonaws.com/reservation-form.gif)

## User Authentication

* Users can Sign in or Sign up
* Wrong inputs will render errors on both forms

<!-- ![user-auth](https://open-play-seed.s3.amazonaws.com/user-auth.gif | width=100px) -->

<img src="https://open-play-seed.s3.amazonaws.com/user-auth.gif" width="500"/>



### Component for Time Conversion within Reservations

```javascript
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
```

## Future Implementations

* Maps feature
* Augment website data based on user location
* Filters

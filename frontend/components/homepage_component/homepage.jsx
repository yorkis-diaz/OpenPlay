import React from 'react';
import HomepageEventItem from '../homepage_component/homepage_event_item';
import { Link } from 'react-router-dom'

class Homepage extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    scrollTo(0, 0)
    this.props.fetchEvents()
  }

  componentDidUpdate(prev){
  }

  render () {
    let { events } = this.props
    const topRatedItems = events.filter((event) => event.rating >= 4).map((event) => {
      return (
        <HomepageEventItem event={event} key={event.id}/>
      )
    })
    const areaItems = events.filter((event) => event.event_state === "New York" ).map((event) => {
      return (
        <HomepageEventItem event={event} key={event.id} />
      )
    })
    return (
      <section className="homepage">
        <h1 className="h1-headers">Events near New York</h1>
        <hr className="homepage-hr" />
        <div className="recently-viewed-container">
          <ul className="recently-viewed">{areaItems}</ul>
        </div>
        <h1 className="h1-headers">Top Events</h1>
        <hr className="homepage-hr" />
        <div className="top-events-container">
          <ul className="top-events">{topRatedItems}</ul>
        </div>
        <div className="featured-area">
          <h1 className="h1-headers">Featured Areas</h1>
          <hr className="homepage-hr" />
          <ul className="featured-area-ul">
            <Link to="/search/New%20York" className="featured-link">
              New York Area
            </Link>
            <Link to="/search/New%20Orleans" className="featured-link">
              New Orleans
            </Link>
            <Link to="/search/Miami" className="featured-link">
              Miami
            </Link>
            <Link to="/search/Los%20Angeles" className="featured-link">
              Los Angeles
            </Link>
            <Link to="/search/Las%20Vegas" className="featured-link">
              Las Vegas
            </Link>
            <Link to="/search/Chicago" className="featured-link">
              Chicago
            </Link>
          </ul>
        </div>
      </section>
    );
  }
}

export default Homepage;
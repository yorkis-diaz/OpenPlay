import React from 'react';
import HomepageEventItem from '../homepage_component/homepage_event_item';
import { Link } from 'react-router-dom'

class Homepage extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchEvents()
  }

  componentDidUpdate(prev){
  }

  render () {
    let { events } = this.props
    const eventItems = events.map((event) => {
      return (
        <HomepageEventItem event={event} key={event.id}/>
      )
    })
    return (
      <section className="homepage">
        <h1 className="h1-headers">Recently Viewed</h1>
        {/* consider changing title to something else */}
        <hr className="homepage-hr" />
        <div className="recently-viewed-container">
          <ul className="recently-viewed">{eventItems}</ul>
        </div>
        <h1 className="h1-headers">Top Events</h1>
        <hr className="homepage-hr" />
        <div class="top-events-container">
          <ul class="top-events">{eventItems}</ul>
        </div>
        <div className="featured-area">
          <h1 className="h1-headers">Featured Areas</h1>
          <hr className="homepage-hr" />
          <ul className="featured-area-ul">
            <Link to="/search/New%20York%20City" className="featured-link">
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
          {/* <ul class="states-ul">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
        </div>
      </section>
    );
  }
}

export default Homepage;
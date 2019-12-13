import React from 'react';
import HomepageEventItem from '../events/homepage_event_item';

class Homepage extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        this.props.fetchEvents()
    }

    render () {
        let { events } = this.props
        const eventItems = events.map((event) => {
            return (
                <HomepageEventItem event={event} />
            )
        })
        return (
          <section className="homepage">
            <div className="recently-viewed-container">
              <ul className="recently-viewed">
                {eventItems}
              </ul>
            </div>
          </section>
        );
    }
}

export default Homepage;
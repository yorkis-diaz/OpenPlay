import React from 'react';

class EventShow extends React.Component {

    componentDidMount () {
        const { eventId } = this.props.match.params;
        this.props.fetchEvent(eventId);

    }

    componentDidUpdate () {
        //have to implement upon event searched
        // prev.location.pathname -- this.props.history.location.pathname logic
    }

    render() {
        
        if (!this.props.event) {
            return (
                <h1></h1>
            );
        } else {
          return (
                <h1>
                    {this.props.event.id}
                </h1>
            )  
        }

        
    }
}

export default EventShow;
import React from 'react';

class EventShow extends React.Component {

    componentDidMount () {
        const { eventId } = this.props.match.params;
        this.props.fetchEvent(eventId);

    }

    componentDidUpdate () {
        //have to implement upun event searched
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
import React from 'react';

class EventShow extends React.Component {

    componentDidMount () {
        debugger
        const { eventId } = this.props.match.params;
        this.props.fetchEvent(eventId);
        debugger
    }

    render() {
        if (!this.props.event) {
            debugger
            return (
                <h1></h1>
            );
        } else {
            debugger
          return (
                <h1>
                    {this.props.event.id}
                </h1>
            )  
        }

        
    }
}

export default EventShow;
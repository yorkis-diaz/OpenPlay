import { connect } from 'react-redux';
import { fetchEvent } from '../../actions/event_actions'
import EventShow from './event_show';


const mapStateToProps = (state, ownProps) => {
  debugger
  const  id = ownProps.match.params.eventId
  const event = state.entities.events[id]
  
  return {
    event
  };
};

const mapDispatchToProps = dispatch => {
  return {

    fetchEvent: eventId => dispatch(fetchEvent(eventId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
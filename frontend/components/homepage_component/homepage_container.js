import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_actions';
import { fetchEvent } from '../../util/events_util';
import Homepage from './homepage';
import { selectEvents } from '../../util/selectors';


const mapStateToProps = state => {

  return {
    events: selectEvents(state.entities.events)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
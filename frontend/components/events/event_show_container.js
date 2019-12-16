import { connect } from 'react-redux';
import { fetchEvent } from '../../actions/event_actions'
import EventShow from './event_show';
import { createFavorite, deleteFavorite } from "../../actions/session_actions";


const mapStateToProps = (state, ownProps) => {
  const  id = ownProps.match.params.eventId;
  const event = state.entities.events[id];
  const currentUser = state.session.currentUser;
  let savedEventId = undefined;
  Object.values(state.session.savedEvents).forEach((savedEvent) => {
    if (savedEvent.event_id === parseInt(ownProps.match.params.eventId)) {
      savedEventId = savedEvent.id
    }
  });
        
  return {
    loggedIn: Boolean(currentUser),
    currentUser,
    event,
    savedEventId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createFavorite: (user_id, event_id) => dispatch(createFavorite(user_id, event_id)),
    deleteFavorite: (favorite_id) => dispatch(deleteFavorite(favorite_id)),
    fetchEvent: eventId => dispatch(fetchEvent(eventId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
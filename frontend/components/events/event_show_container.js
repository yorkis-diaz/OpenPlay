import { connect } from 'react-redux';
import { fetchEvent } from '../../actions/event_actions'
import EventShow from './event_show';
import { deleteFavorite } from '../../util/favorite_util';
import { createFavorite } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  const  id = ownProps.match.params.eventId
  const event = state.entities.events[id]
  const currentUser = state.session.currentUser
        
  return {
    loggedIn: Boolean(currentUser),
    currentUser,
    event
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createFavorite: (user_id, event_id) => dispatch(createFavorite(user_id, event_id)),
    deleteFavorite: (user_id, favorite_id) => dispatch(deleteFavorite(user_id, favorite_id)),
    fetchEvent: eventId => dispatch(fetchEvent(eventId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
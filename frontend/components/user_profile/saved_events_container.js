import { connect } from "react-redux";
import SavedEvents from "./saved_events";
import { deleteFavorite, fetchFavorites } from "../../actions/session_actions";


const mapStateToProps = (state, ownProps) => {
    const { currentUser } = state.session
    return {
        currentUser,
        savedEvents: Object.values(state.session.savedEvents),
        events: state.entities.events
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteFavorite: favorite_id => dispatch(deleteFavorite(favorite_id)),
        fetchFavorites: userId => dispatch(fetchFavorites(userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedEvents);




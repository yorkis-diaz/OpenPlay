import { connect } from "react-redux";
import SavedEvents from "./saved_events";
import { deleteFavorite } from "../../actions/session_actions";


const mapStateToProps = (state, ownProps) => {
    const { currentUser } = state.session
    return {
        currentUser,
        savedEvents: Object.values(state.session.savedEvents),
        // reservations: Object.values(state.entities.reservations),
        events: state.entities.events
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteFavorite: favorite_id => dispatch(deleteFavorite(favorite_id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedEvents);



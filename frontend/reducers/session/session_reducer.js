import { combineReducers } from "redux";
import CurrentUserReducer from "./current_user_reducer";
import ReservationsReducer from "./reservations_reducer";
import SavedEventsReducer from "./saved_events_reducer";


const SessionReducer = combineReducers({
    currentUser: CurrentUserReducer,
    reservations: ReservationsReducer,
    savedEvents: SavedEventsReducer
})

export default SessionReducer;
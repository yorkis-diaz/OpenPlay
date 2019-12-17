import { combineReducers } from "redux";
import CurrentUserReducer from "./current_user_reducer";
import SavedEventsReducer from "./saved_events_reducer";
import ReservationInfoReducer from "../session/reservation_info_reducer";


const SessionReducer = combineReducers({
    currentUser: CurrentUserReducer,
    savedEvents: SavedEventsReducer,
    reservationInfo: ReservationInfoReducer
})

export default SessionReducer;
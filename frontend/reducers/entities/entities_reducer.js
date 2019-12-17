import { combineReducers } from 'redux';
import EventsReducer from './events_reducer';
import ReviewsReducer from './reviews_reducer';
import UsersReducer from './users_reducer';
import ReservationsReducer from './reservations_reducer';


const EntitiesReducer = combineReducers({
    events: EventsReducer,
    reviews: ReviewsReducer,
    users: UsersReducer, 
    reservations: ReservationsReducer
})

export default EntitiesReducer;
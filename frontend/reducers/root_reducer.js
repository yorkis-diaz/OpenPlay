import { combineReducers } from 'redux';
import SessionReducer from './session/session_reducer';
import Errors_reducer from './errors/errors_reducer';


const RootReducer = combineReducers({
    session: SessionReducer,
    errors: Errors_reducer
});

export default RootReducer;
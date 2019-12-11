import { combineReducers } from 'redux';
import SessionReducer from './session/session_reducer';
import Errors_reducer from './errors/errors_reducer';
import uiReducer from './ui/ui_reducer';


const RootReducer = combineReducers({
    session: SessionReducer,
    errors: Errors_reducer,
    ui: uiReducer
});

export default RootReducer;
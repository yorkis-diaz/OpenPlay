import { combineReducers } from 'redux';
import SessionReducer from './session/session_reducer';
import Errors_reducer from './errors/errors_reducer';
import uiReducer from './ui/ui_reducer';
import EntitiesReducer from './entities/entities_reducer';


const RootReducer = combineReducers({
    entities: EntitiesReducer,
    session: SessionReducer,
    errors: Errors_reducer,
    ui: uiReducer
});

export default RootReducer;
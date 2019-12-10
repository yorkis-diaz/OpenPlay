import { combineReducers } from 'redux';
import FiltersReducer from './filters_reducer';
import ModalReducer from './modal_reducer';

const uiReducer = combineReducers({
    filters: FiltersReducer,
    modal: ModalReducer
})

export default uiReducer;
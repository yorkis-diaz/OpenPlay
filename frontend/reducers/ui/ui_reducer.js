import { combineReducers } from 'redux';
import FiltersReducer from './filters_reducer';
import ModalReducer from './modal_reducer';
import DropdownReducer from './dropdown_reducer';

const uiReducer = combineReducers({
    filters: FiltersReducer,
    modal: ModalReducer,
    dropdown: DropdownReducer,
})

export default uiReducer;
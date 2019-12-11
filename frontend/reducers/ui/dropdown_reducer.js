import {
    DROPDOWN_OPEN,
    DROPDOWN_CLOSE
} from '../../actions/dropdown_actions.js';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions.js';

const _nullState = null

const DropdownReducer = (state = _nullState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case DROPDOWN_OPEN:
            return action.dropdown;

        case DROPDOWN_CLOSE:
            return _nullState

        // case RECEIVE_CURRENT_USER:
        //     return _nullState

        default:
            return state;
    }
}

export default DropdownReducer;
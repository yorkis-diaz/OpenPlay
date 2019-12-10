import { 
    MODAL_OPEN,
    MODAL_CLOSE
} from '../../actions/modal_actions';

const _nullState = null

const ModalReducer = (state = _nullState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case MODAL_OPEN:
            return action.modal;

        case MODAL_CLOSE:
            return _nullState
    
        default:
            return state;
    }
}

export default ModalReducer;
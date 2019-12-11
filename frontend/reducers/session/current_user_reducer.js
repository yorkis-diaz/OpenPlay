import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../../actions/session_actions";

const _nullUser = null

const CurrentUserReducer = (state = _nullUser, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const { user } = action.currentUser
            return user;

        case LOGOUT_CURRENT_USER:
            return _nullUser
    
        default:
            return state;
    }
}

export default CurrentUserReducer;
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_INFO } from '../../actions/reservation_actions';



export default (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_INFO:
            return action.reservationInfo

        case LOGOUT_CURRENT_USER:
            return {};
    
        default:
            return state;
    }
}
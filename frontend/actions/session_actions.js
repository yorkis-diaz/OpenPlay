export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS"
import * as SessionAPIUtil from '../util/session_api_util';


const receiveCurrentUser = (currentUser) => {
    return {
      type: RECEIVE_CURRENT_USER,
      currentUser
    }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}

export const login = user => dispatch => {
  return SessionAPIUtil.login(user).then(
    user => {
      dispatch(receiveCurrentUser(user));
    },
    errors => {
      dispatch(receiveErrors(errors.responseJSON));
    }
  );
};

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user).then(
    user => {
      dispatch(receiveCurrentUser(user));
    },
    errors => {
      dispatch(receiveErrors(errors.responseJSON));
    }
  );
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(
    () => {
      dispatch(logoutCurrentUser());
    },
    err => {
      dispatch(receiveErrors(err.responseJSON));
    }
  );
}
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS"
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const RECEIVE_FAVORITES = "RECEIVE_FAVORITES";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
import * as SessionAPIUtil from '../util/session_api_util';
import * as FavoriteAPIUtil from '../util/favorite_util';


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

export const receiveFavorite = (favorite) => {
  return {
    type: RECEIVE_FAVORITE,
    favorite
  }
}

export const receiveFavorites = (favorites) => {
  return {
    type: RECEIVE_FAVORITES,
    favorites
  }
}

export const removeFavorite = (favoriteId) => {
  return {
    type: REMOVE_FAVORITE,
    favoriteId
  };
};

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

export const fetchFavorites = (user_id) => dispatch => {
  return FavoriteAPIUtil.fetchFavorites(user_id).then(favorites => {
    dispatch(receiveFavorites(favorites));
  });
}

export const createFavorite = (user_id, event_id) => dispatch => {
  return FavoriteAPIUtil.createFavorite(user_id, event_id).then(favorite => {
    dispatch(receiveFavorite(favorite));
  });
}

export const deleteFavorite = (favoriteId) => dispatch => {
  return FavoriteAPIUtil.deleteFavorite(favoriteId).then(() => {
    dispatch(removeFavorite(favoriteId));
  });
};
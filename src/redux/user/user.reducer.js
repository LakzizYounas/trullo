import UserActionTypes from './user.types';

const INITIAL_STATE = {
  error: null,
  currentUser: null,
  isFetching: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
  case UserActionTypes.CHECK_USER_SESSION:
    return {
      ...state,
      error: null,
      isFetching: true,
    };
  case UserActionTypes.SIGN_IN_SUCCESS:
    return {
      ...state,
      error: null,
      currentUser: payload,
      isFetching: false,
    };
  case UserActionTypes.SIGN_OUT_SUCCESS:
    return {
      ...state,
      error: null,
      currentUser: null,
    };
  case UserActionTypes.SIGN_UP_FAILURE:
  case UserActionTypes.SIGN_IN_FAILURE:
  case UserActionTypes.SIGN_OUT_FAILURE:
    return {
      ...state,
      error: payload,
    };
  default:
    return state;
  }
};

export default userReducer;

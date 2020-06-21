import { BoardActionTypes } from './board.types';

import { Map, Set } from 'immutable';

const INITIAL_STATE = {
  error: null,
  hidden: true,
  byNames: new Map(),
  allNames: new Set(),
  isFetchingUserBoards: false,
};

const boardReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
  case BoardActionTypes.TOGGLE_NEW_BOARD:
    return {
      ...state,
      hidden: !state.hidden,
    };
  case BoardActionTypes.LOAD_USER_BOARDS_START:
    return {
      ...state,
      isFetchingUserBoards: true,
    };
  case BoardActionTypes.LOAD_USER_BOARDS_SUCCESS:
    return {
      ...state,
      error: null,
      hidden: true,
      byNames: new Map(payload.byNames),
      allNames: new Set(payload.allNames),
      isFetchingUserBoards: false,
    };
  case BoardActionTypes.ADD_BOARD_SUCCESS:
    return {
      ...state,
      error: null,
      hidden: true,
      byNames: state.byNames.merge(payload.byNames),
      allNames: state.allNames.union(payload.allNames),
    };
  case BoardActionTypes.ADD_BOARD_FAILURE:
  case BoardActionTypes.LOAD_USER_BOARDS_FAILURE:
    return {
      ...state,
      error: payload,
    };
  default:
    return state;
  }
};

export default boardReducer;

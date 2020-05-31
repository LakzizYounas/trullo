import { BoardActionTypes } from './board.types';

import { Map, Set } from 'immutable';

const INITIAL_STATE = {
  error: null,
  hidden: true,
  byIds: new Map(),
  allIds: new Set(),
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
      byIds: new Map(payload.byIds),
      allIds: new Set(payload.allIds),
      isFetchingUserBoards: false,
    };
  case BoardActionTypes.ADD_BOARD_SUCCESS:
    return {
      ...state,
      error: null,
      hidden: true,
      byIds: state.byIds.merge(payload.byIds),
      allIds: state.allIds.union(payload.allIds),
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

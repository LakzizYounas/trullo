import { BoardActionTypes } from './board.types';

import { Map, Set } from 'immutable';

const INITIAL_STATE = {
  error: null,
  hidden: true,
  byIds: new Map(),
  allIds: new Set(),
};

const boardReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
  case BoardActionTypes.TOGGLE_NEW_BOARD:
    return {
      ...state,
      hidden: !state.hidden,
    };
  case BoardActionTypes.ADD_BOARD_SUCCESS:
    return {
      ...state,
      error: null,
      hidden: true,
      byIds: state.byIds.set([payload.id, payload]),
      allIds: state.allIds.add(payload.id),
    };
  case BoardActionTypes.ADD_BOARD_FAILURE:
    return {
      ...state,
      error: payload,
    };
  default:
    return state;
  }
};

export default boardReducer;

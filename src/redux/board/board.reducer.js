import { BoardActionTypes } from './board.types';

const INITIAL_STATE = {
  hidden: true,
};

const boardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case BoardActionTypes.TOGGLE_NEW_BOARD:
    return {
      ...state,
      hidden: !state.hidden,
    };
  default:
    return state;
  }
};

export default boardReducer;

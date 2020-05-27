import { BoardActionTypes } from './board.types';

export const toggleNewBoardHidden = () => ({
  type: BoardActionTypes.TOGGLE_NEW_BOARD,
});

export const addBoardStart = (boardInfos) => ({
  type: BoardActionTypes.ADD_BOARD_START,
  payload: boardInfos,
});

export const addBoardSuccess = (board) => ({
  type: BoardActionTypes.ADD_BOARD_SUCCESS,
  payload: board,
});

export const addBoardFailure = (error) => ({
  type: BoardActionTypes.ADD_BOARD_FAILURE,
  payload: error,
});


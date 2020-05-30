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
  payload: {
    byIds: { [board.id]: board },
    allIds: [board.id],
  },
});

export const addBoardFailure = (error) => ({
  type: BoardActionTypes.ADD_BOARD_FAILURE,
  payload: error,
});

export const loadUserBoardsStart = (userid) => ({
  type: BoardActionTypes.LOAD_USER_BOARDS_START,
  payload: userid,
});

export const loadUserBoardsSuccess = ({ byIds, allIds }) => ({
  type: BoardActionTypes.LOAD_USER_BOARDS_SUCCESS,
  payload: {
    byIds,
    allIds,
  },
});

export const loadUserBoardsFailure = (error) => ({
  type: BoardActionTypes.LOAD_USER_BOARDS_FAILURE,
  payload: error,
});

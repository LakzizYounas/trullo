import { createSelector } from 'reselect';
import { boardsToArray } from './board.utils';

const selectBoard = state => state.board;

export const selectNewBoardHidden = createSelector(
  [selectBoard],
  board => board.hidden
);

export const selectBoardsByIds = createSelector(
  [selectBoard],
  board => board.byIds
);

export const selectBoardsAllIds = createSelector(
  [selectBoard],
  board => board.allIds
);

export const selectBoards = createSelector(
  [selectBoard],
  board => boardsToArray(board.byIds, board.allIds)
);

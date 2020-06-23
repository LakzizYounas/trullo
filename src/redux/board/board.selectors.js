import { createSelector } from 'reselect';
import { boardsToArray } from './board.utils';

const selectBoard = state => state.board;

export const selectNewBoardHidden = createSelector(
  [selectBoard],
  board => board.hidden
);

export const selectBoards = createSelector(
  [selectBoard],
  board => boardsToArray(board.byNames, board.allNames)
);

export const selectBoardByName = (title) => createSelector(
  [selectBoard],
  board => board.byNames.get(title) || {}
);

export const selectIsFetchingUserBoards = createSelector(
  [selectBoard],
  board => board.isFetchingUserBoards
);

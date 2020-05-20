import { createSelector } from 'reselect';

const selectBoard = state => state.board;

export const selectNewBoardHidden = createSelector(
  [selectBoard],
  board => board.hidden
);

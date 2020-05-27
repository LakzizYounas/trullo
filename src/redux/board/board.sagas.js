import { takeLatest, put, all, call } from 'redux-saga/effects';

import { BoardActionTypes } from './board.types';
import { addBoardSuccess, addBoardFailure } from './board.actions';

import { addDocumentToCollection } from '../../firebase/firebase.utils';

export function* addBoard({ payload }) {
  try {
    const board = yield addDocumentToCollection('boards', payload);
    yield put(addBoardSuccess(board));
  } catch (error) {
    yield put(addBoardFailure(error));
  }
}

export function* onAddBoardStart() {
  yield takeLatest(
    BoardActionTypes.ADD_BOARD_START,
    addBoard
  );
}

export function* boardSagas() {
  yield all([
    call(onAddBoardStart),
  ]);
}

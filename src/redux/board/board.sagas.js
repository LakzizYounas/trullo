import { takeLatest, put, all, call } from 'redux-saga/effects';

import { BoardActionTypes } from './board.types';
import { addBoardSuccess, addBoardFailure } from './board.actions';

import { addDocumentToCollection } from '../../firebase/firebase.utils';

export function* addBoard({ payload }) {
  try {
    const boardRef = yield addDocumentToCollection('boards', payload);
    const boardSnapshot = yield boardRef.get();

    yield put(addBoardSuccess({ id: boardSnapshot.id, ...boardSnapshot.data() }));
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

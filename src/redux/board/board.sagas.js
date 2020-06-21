import { takeLatest, put, all, call, delay } from 'redux-saga/effects';

import { BoardActionTypes } from './board.types';
import {
  addBoardSuccess,
  addBoardFailure,
  loadUserBoardsSuccess,
  loadUserBoardsFailure,
} from './board.actions';

import { addDocumentToCollection, db } from '../../firebase/firebase.utils';

export function* addBoard({ payload }) {
  try {
    const boardRef = yield addDocumentToCollection('boards', payload);
    const boardSnapshot = yield boardRef.get();

    yield put(addBoardSuccess({ id: boardSnapshot.id, ...boardSnapshot.data() }));
  } catch (error) {
    yield put(addBoardFailure(error));
  }
}

export function* loadUserBoards({ payload }) {
  try {
    yield delay(2000);
    const querySnapshot = yield db.collection('boards')
      .where('user', '==', payload)
      .orderBy('timestamp').get();
    const byNames = {};
    const allNames = [];
    querySnapshot.forEach(doc => {
      const data = doc.data();
      byNames[data.title] = { ...data };
      allNames.push(data.title);
    });
    yield put(loadUserBoardsSuccess({ byNames, allNames }));
  } catch (error) {
    yield put(loadUserBoardsFailure(error));
  }
}

export function* onAddBoardStart() {
  yield takeLatest(
    BoardActionTypes.ADD_BOARD_START,
    addBoard
  );
}

export function* onLoadUserBoards() {
  yield takeLatest(
    BoardActionTypes.LOAD_USER_BOARDS_START,
    loadUserBoards,
  );
}

export function* boardSagas() {
  yield all([
    call(onAddBoardStart),
    call(onLoadUserBoards),
  ]);
}

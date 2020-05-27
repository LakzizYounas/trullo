import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.sagas';
import { boardSagas } from './board/board.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(boardSagas),
  ]);
}

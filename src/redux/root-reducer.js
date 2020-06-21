import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import boardReducer from './board/board.reducer';
import userReducer from './user/user.reducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  board: boardReducer,
  user: userReducer,
});

export default rootReducer;

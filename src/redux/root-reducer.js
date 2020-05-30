import { combineReducers } from 'redux';

import boardReducer from './board/board.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  board: boardReducer,
  user: userReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import games from './game-reducer';

const rootReducer = combineReducers({
  games: games
});

export default rootReducer;

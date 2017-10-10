import * as types from '../actions/action-types';

export default function gameReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_GAMES_SUCCESS:
      return action.games;

    default:
      return state;
  }
}

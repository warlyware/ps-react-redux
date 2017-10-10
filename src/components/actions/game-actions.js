import * as types from './action-types';
import gameApi from '../../api/mock-game-api';

export function loadGamesSuccess(games) {
  return {
    type: types.LOAD_GAMES_SUCCESS,
    games: games
  };
}

export function loadGames() {
  return function (dispatch) {
    return gameApi.getAllGames().then(games => {
      dispatch(loadGamesSuccess(games));
    }).catch(error => {
      throw(error);
    });
  };
}

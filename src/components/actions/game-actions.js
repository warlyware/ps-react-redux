import * as types from './action-types';

export function createGame(game) {
  return {
    type: types.CREATE_GAME,
    game: game
  };
}

import * as types from '../actions/action-types';

export default function gameReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_GAME:
      return [
        ...state,
        Object.assign({}, action.game)
      ];

    default:
      return state;
  }
}

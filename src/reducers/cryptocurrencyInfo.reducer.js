import * as ActionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  cryptocurrencyInfo: {},
  error: null
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ActionTypes.GET_CRYPTOCURRENCY_SUCCESS:
      return Object.assign({}, state, action.cryptocurrencyInfo.data[action.id]);
    case ActionTypes.GET_CRYPTOCURRENCY_FAILED:
      return Object.assign({}, state, {errors: action.error});
    default:
      return state;
  }
}

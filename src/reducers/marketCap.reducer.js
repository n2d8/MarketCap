import * as ActionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  listings: [],
  errors: {}
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ActionTypes.GET_LISTINGS_SUCCESS:
      return Object.assign({}, state, {listings: [...state.listings, action.listings.data]})
    case ActionTypes.GET_LISTINGS_FAILED:
      return Object.assign({}, state, {errors: action.error});
    default:
      return state;
  }
}

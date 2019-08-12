import * as ActionTypes from './actionTypes';
import * as MarketCapApi from '../api/marketCap.api';

function getListingsSuccess(listings) {
  return {
    type: ActionTypes.GET_LISTINGS_SUCCESS,
    listings
  };
}

function getListingFailed(error) {
  return {
    type: ActionTypes.GET_LISTINGS_FAILED,
    error
  };
}

export function getCoinListing() {
  return (dispatch) => {
    return MarketCapApi.getMarketCapListing().then(listings => {
      dispatch(getListingsSuccess(listings));
    }).catch(error => {
      dispatch(getListingFailed(error));
    });
  }
}

import * as ActionTypes from './actionTypes';
import * as MarketCapApi from '../api/coinMarketCap.api';

function getCryptocurrencySuccess(cryptocurrencyInfo) {
  return {
    type: ActionTypes.GET_CRYPTOCURRENCY_SUCCESS,
    cryptocurrencyInfo
  };
}

function getCryptocurrencyFailed(error) {
  return {
    type: ActionTypes.GET_CRYPTOCURRENCY_FAILED,
    error
  };
}

export function getCryptocurrency(id) {
  return (dispatch) => {
    return MarketCapApi.getCryptocurrencyInfo(id).then(data => {
      dispatch(getCryptocurrencySuccess(data));
    }).catch(error => {
      dispatch(getCryptocurrencyFailed(error));
    });
  }
}

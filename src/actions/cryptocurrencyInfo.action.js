import * as ActionTypes from './actionTypes';
import * as MarketCapApi from '../api/coinMarketCap.api';

function getCryptocurrencySuccess(cryptocurrencyInfo, id) {
  return {
    type: ActionTypes.GET_CRYPTOCURRENCY_SUCCESS,
    cryptocurrencyInfo,
    id
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
      dispatch(getCryptocurrencySuccess(data, id));
    }).catch(error => {
      dispatch(getCryptocurrencyFailed(error));
    });
  }
}

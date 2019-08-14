import { combineReducers } from 'redux';
import marketCap from './marketCap.reducer';
import cryptocurrencyInfo from './cryptocurrencyInfo.reducer';

const rootReducer = combineReducers({
  marketCap,
  cryptocurrencyInfo
});

export default rootReducer;

import { combineReducers } from 'redux';
import marketCap from './marketCap.reducer';

const rootReducer = combineReducers({
  marketCap
});

export default rootReducer;

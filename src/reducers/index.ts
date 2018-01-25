import { combineReducers, Reducer } from 'redux';

import { counter } from './counter';

export const reducer: Reducer<any> = combineReducers({
  counter,
});

export default reducer;

import { Reducer } from 'redux';
import { handleActions } from 'redux-actions';

import { actions } from '../actions';
import { default as Counter } from '../models/Counter';

const initialState = new Counter();

export const counter: Reducer<Counter> = handleActions({
  [actions.countUp.toString()]:    (state, action) => state.up(),
  [actions.countDown.toString()]:  (state, action) => state.down(),
  [actions.countReset.toString()]: (state, action) => state.reset(),
}, initialState);

export default counter;

import { ActionCreator } from 'redux';
import { createActions } from 'redux-actions';

import * as types from '../constants/ActionTypes/counter';

export const actions: { [actionName: string]: ActionCreator<any> } = createActions(
  {},
  types.COUNT_UP,
  types.COUNT_DOWN,
  types.CONT_RESET,
);

export default actions;

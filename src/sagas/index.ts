import { delay } from 'redux-saga';
import { call, fork } from 'redux-saga/effects';

function* testSaga() {
  yield call(delay, 3000);
  console.log('async process test');  // tslint:disable-line:no-console
}

export function* rootSaga() {
  yield fork(testSaga);
}

export default rootSaga;

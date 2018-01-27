import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import { default as createSagaMiddleware } from 'redux-saga';

import { reducer } from '../reducers';
import { rootSaga } from '../sagas';

export function configureStore(): Store<any> {
  const saga = createSagaMiddleware();

  const middlewares: Middleware[] = [
    saga,
  ];

  if (process.env.NODE_ENV !== 'production') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
  }

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  const store: Store<any> = createStoreWithMiddleware(reducer);
  saga.run(rootSaga);

  return store;
}

export default configureStore;

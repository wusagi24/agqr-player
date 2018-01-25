import * as React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from './store/configureStore';

import { CounterContainer } from './containers/CounterContainer';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
}

export default App;

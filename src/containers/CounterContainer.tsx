import * as React from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actions } from '../actions';
import { default as CounterModel } from '../models/Counter';

import { CountView } from '../components/Count';
import { Decrement } from '../components/Decrement';
import { Increment } from '../components/Increment';
import { Reset } from '../components/Reset';

interface CounterProps {
  count: number;
  countUp: () => Action;
  countDown: () => Action;
  countReset: () => Action;
}

class Counter extends React.Component<CounterProps, {}> {
  public render() {
    const { count } = this.props;
    const { countUp, countDown, countReset } = this.props;

    return(
      <div>
        <CountView count={count} />
        <div>
          <button onClick={countUp}><Increment /></button>
          <button onClick={countDown}><Decrement /></button>
        </div>
        <button onClick={countReset}><Reset /></button>
      </div>
    );
  }
}

function mapStateToProps(state): { count: number } {
  return {
    count: state.counter.getCount(),
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return (
    {
      countDown:  () => dispatch(actions.countDown()),
      countReset: () => dispatch(actions.countReset()),
      countUp:    () => dispatch(actions.countUp()),
    }
  );
}

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

export default CounterContainer;

import * as React from 'react';

interface CounterProps {
  count: number;
}

export const CountView: React.SFC<CounterProps> = (props: CounterProps) => {
  const { count } = props;

  return (
    <div>
      <span>{count}</span>
    </div>
  );
};

export default CountView;

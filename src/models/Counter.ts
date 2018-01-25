import { Record } from 'immutable';

const MAX_COUNT = 99;
const MIN_COUNT = 0;
const INIT_COUNT = 0;
const STEP_COUNT = 1;

const CounterRecord = Record({
  count: INIT_COUNT,
});

class Counter extends CounterRecord {
  public getCount(): number {
    return this.get('count', INIT_COUNT);
  }

  public up(): this {
    const now = this.getCount();
    const next = (now < MAX_COUNT) ? now + STEP_COUNT : now;
    return this.set('count', next);
  }

  public down(): this {
    const now = this.getCount();
    const next = (now > MIN_COUNT) ? now - STEP_COUNT : now;
    return this.set('count', next);
  }

  public reset(): this {
    return this.set('count', INIT_COUNT);
  }
}

export default Counter;

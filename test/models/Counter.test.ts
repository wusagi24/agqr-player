import * as assert from 'power-assert';
import { Counter, INIT_COUNT, MAX_COUNT, STEP_COUNT } from '../../src/models/Counter';

describe('Counter.up()', () => {
  it('カウントアップできる', () => {
    const counter = new Counter();
    assert.strictEqual(counter.getCount(), INIT_COUNT);

    const nextCounter = counter.up();
    assert.notDeepEqual(nextCounter, counter);
    assert.strictEqual(nextCounter.getCount(), INIT_COUNT + STEP_COUNT);
  });

  it('最大値以上カウントアップしない', () => {
    const counter = new Counter();
    assert.strictEqual(counter.getCount(), INIT_COUNT);

    let tempCounter: Counter = counter;
    for (let i = INIT_COUNT; i < MAX_COUNT; i += STEP_COUNT) {
      tempCounter = tempCounter.up();
    }
    assert.strictEqual(tempCounter.getCount(), MAX_COUNT);

    tempCounter = tempCounter.up();
    assert.notStrictEqual(tempCounter.getCount(), MAX_COUNT + STEP_COUNT);
    assert.strictEqual(tempCounter.getCount(), MAX_COUNT);
  });
});

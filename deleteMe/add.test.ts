import { add } from './add';

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(2, 3)).toEqual(5);
  });
});

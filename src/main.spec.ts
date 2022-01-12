import { hello } from './main';

describe('hello()', () => {
  it("should return 'Hello, Meticulous!'", () => {
    const result = hello();

    expect(result).toBe('Hello, Meticulous!');
  });
});

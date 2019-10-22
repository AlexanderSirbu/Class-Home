const sum = require('./index');

test('Adding 1 + 3 result 4', () => {
  expect(sum(1, 3)).toBe(4);
});

test('Calling sum without params', () => {
  expect(sum()).toBe('Both parameters should be present');
});

test('Calling sum with strings', () => {
  expect(sum('Hello', 'World')).toBe('Parameters should be numbers');
});

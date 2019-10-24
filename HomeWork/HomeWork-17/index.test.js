const getSumm = require('./index')

test('multiplication of numbers 23 * 3', () => {
  expect(getSumm('a', 'b')).toBe('ab')
})

test('multiplication some caracters a * b ', () => {
  expect(getSumm(23, 3)).toBe(69)
})

test('Empty', () => {
  expect(getSumm()).toBe(undefined)
})

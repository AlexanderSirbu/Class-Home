const sum = require('./sum')
const getWeekDay = require('./date')

test('Enter how much u want arguments', () => {
  expect(sum(1, 23)).toBe(24)
})

test('Short code weekday', () => {
  expect(getWeekDay()).toBe('Tue')
})

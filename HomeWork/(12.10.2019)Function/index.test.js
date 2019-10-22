
const getDescriminant = require('./descrimiant')

const rootsOfQuadraticEquation = require('./root')

test('Math pow (b,2) - 4*a*c ', () => {
  expect(getDescriminant(1, 1, 1)).toBe(-3)
})

test('If descriminant is < 0', () => {
  expect(rootsOfQuadraticEquation(-3, 2, 2, 2)).toBe('нет действительных корней')
})
test('if descriment is == 0', () => {
  expect(rootsOfQuadraticEquation(0, 1, 2, 1)).toBe('Дискриминант : ' + 0 + ', корень уровнения :' + -1)
})
test('if descriment is > 0', () => {
  expect(rootsOfQuadraticEquation(513, 1, 23, 4)).toBe('Дискриминант : ' + 513 + ' , корень уровнения x1 : ' + -0.17524834709387527 + ', корень уровнения  x2 : ' + -22.824751652906123)
})
test('somthing wrong', () => {
  expect(rootsOfQuadraticEquation()).toBe('err')
})

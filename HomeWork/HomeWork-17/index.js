// Напишите функцию, которая слаживает 2 значение и выводит их сумму.
// Если результат является числом, то его надо вывести с 2 знаками после запятой.
// Написать unit tests для функции вычисления суммы.

function getSumm (a, b) {
  if (typeof (a) === 'number' && typeof (b) === 'number') {
    var c = a * b
    alert(c.toFixed(2))
  } else if (typeof (a) === 'string' || typeof (b) === 'string') {
    c = a + b
  } else {
    alert('something is wrong, please try again once to enter something into the proposed area')
  }
  return c
};

console.log(getSumm(23))

module.exports = getSumm

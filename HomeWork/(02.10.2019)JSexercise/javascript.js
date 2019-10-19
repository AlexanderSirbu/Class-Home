document.getElementById('exercise-1').onclick = function () {
  var firstNumber = prompt('Write first number that will not be small or equal to 50 and greater than or equal to 99 ')
  console.log(firstNumber)
  var secondNumber = prompt('Write second number that will not be small or equal to 50 and greater than or equal to 99 ')
  console.log(secondNumber)

  if (firstNumber >= 50 && firstNumber <= 99 || secondNumber >= 50 && secondNumber <= 99) {
    console.log('its true.')
  } else {
    console.log('its false.')
  }
}

document.getElementById('exercise-2').onclick = function () {
  var a = 5
  var b = 6
  var c = 7
  var p = (a + b + c) / 2
  var s = Math.sqrt(p * (p - a) * (p - b) * (p - c))

  console.log(a, 'a')
  console.log(b, 'b')
  console.log(c, 'c')
  console.log(p, 'p = (a + b + c)/2')
  console.log(s, '(p*(p-a)*(p-b)*(p-c))')
}

document.getElementById('exercise-3').onclick = function () {
  var x = prompt('Write first number')
  console.log(x)

  if (x >= 0 && x <= 24) {
    console.log(x, ' is extra small')
  } else if (x >= 25 && x <= 49) {
    console.log(x, ' is small')
  } else if (x >= 50 && x <= 74) {
    console.log(x, ' is medium')
  } else if (x >= 75 && x <= 90) {
    console.log(x, ' is large')
  } else {
    console.log('range is 0-99,try one more time')
  }
}

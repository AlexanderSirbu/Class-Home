function rootsOfQuadraticEquation (descriminant, a, b, c) {
  if (descriminant < 0) {
    return 'нет действительных корней'
  } else if (descriminant == 0) {
    var x1 = -b / (2 * a)
    return 'Дискриминант : ' + descriminant + ', корень уровнения :' + x1
  } else if (descriminant > 0) {
    var x1 = (-b + Math.sqrt(descriminant)) / (2 * a)
    var x2 = (-b - Math.sqrt(descriminant)) / (2 * a)
    return 'Дискриминант : ' + descriminant + ' , корень уровнения x1 : ' + x1 + ', корень уровнения  x2 : ' + x2
  } else {
    return 'err'
  }
}

module.exports = rootsOfQuadraticEquation

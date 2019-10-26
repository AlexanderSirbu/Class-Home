function getWeekDay () { // добавить аргумент date
  var date = new Date(2012, 0, 3) // удалим это а то хардкодим
  return date.toLocaleString('ru', { weekday: 'short' }) // or long {weekday : 'long'}
}
console.log(getWeekDay())

// module.exports = getWeekDay

function sum(a, b) {
  if (a === undefined || b === undefined) {
    return 'Both parameters should be present';
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Parameters should be numbers';
  }
  return a + b;
}

module.exports = sum;

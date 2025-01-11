function generateKey(num1, num2, num3) {
  const arr = [
    num1.toString().padStart(4, '0'),
    num2.toString().padStart(4, '0'),
    num3.toString().padStart(4, '0'),
  ]
  let key = ''
  for (let i = 0; i < 4; i++) {
    key += Math.min(arr[0][i], arr[1][i], arr[2][i])
  }
  return +key
};

module.exports = generateKey
export function generateKey(num1: string, num2: string, num3: string): number {
  const arr = [
    num1.toString().padStart(4, '0'),
    num2.toString().padStart(4, '0'),
    num3.toString().padStart(4, '0'),
  ]
  let key = ''
  for (let i = 0; i < 4; i++) {
    key += Math.min(+arr[0][i], +arr[1][i], +arr[2][i])
  }
  return +key
};

// module.exports = generateKey
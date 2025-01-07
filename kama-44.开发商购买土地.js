const n = m = 3
const arr = [
  [1, 2, 3],
  [2, 1, 3],
  [1, 2, 3],
]
function getAreaMinDiff(arr) {
  let sum = 0
  for (let j = 0; j < m; j++) {
    for (let i = 0; i < n; i++) {
      sum += arr[i][j]
    }
  }

  let min = Infinity
  let count = 0
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m; j++) {
      count += arr[i][j]
      if (j === m - 1) {
        min = Math.min(min, Math.abs(sum - 2 * count))
      }
    }
  }
  count = 0
  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n; j++) {
      count += arr[j][i]
      if (j === n - 1) {
        min = Math.min(min, Math.abs(sum - 2 * count))
      }
    }
  }
  return min
}

const res = getAreaMinDiff(arr)
console.log(res)

return

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
// });

// let n, m, arr, count = 0, min = Infinity
// rl.on('line', (line) => {
//   if (n === undefined) {
//     const _arr = line.split(' ').map((i) => +i)
//     n = _arr[0]
//     m = _arr[1]
//     arr = new Array(n).fill(undefined).map(() => new Array(m))
//     return
//   }
//   arr[count++] = line.split(' ').map((i) => +i)
//   if (count >= n) {
//     // console.log(arr)
//     min = getAreaMinDiff(arr)
//     console.log(min)
//     rl.close()
//   }
// });
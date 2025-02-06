function rightRotateText(text, k) {
  const arr = text.split('')
  reverse(arr, 0, arr.length - 1)
  reverse(arr, 0, k - 1)
  reverse(arr, k, arr.length - 1)
  return arr.join('')
}

function reverse(arr, start, end) {
  let i = start, j = end
  while (i <= j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
    i++
    j--
  }
}
// const res = rightRotateText('abcdefg', 2)
// console.log(res)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

let count = 0
let k = 0
rl.on('line', (line) => {
  if (!count) {
    k = +line
    count++
    return
  }
  console.log(rightRotateText(line, k))
  rl.close()
});
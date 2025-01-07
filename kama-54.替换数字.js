function replaceNumber(text) {
  const arr = text.split('')
  let numberCount = 0
  function isNumber(i) {
    return i >= 0 && i <= 9
  }
  const NUMBER_TEXT = 'number'
  function addNumberText(arr, i) {
    let count = NUMBER_TEXT.length
    while(count) {
      arr[i--] = NUMBER_TEXT[count - 1]
      count--
    }
  }
  for (let i of arr) {
    if (isNumber(i)) {
      numberCount++
    }
  }
  const oldLen = arr.length
  arr.length += numberCount * (NUMBER_TEXT.length - 1)
  let j = arr.length - 1
  for (let i = oldLen - 1; i >= 0; i--) {
    if (!isNumber(arr[i])) {
      arr[j--] = arr[i]
    } else {
      addNumberText(arr, j)
      j -= NUMBER_TEXT.length
    }
  }
  return arr.join('')
}

// const res = replaceNumber('a1b2c3')
const res = replaceNumber('1')

console.log(res)

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
// });

// rl.on('line', (line) => {
//   const res = replaceNumber(line)
//   console.log(res)
//   rl.close()
// });
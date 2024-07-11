function rotateString(s, k) {
  n = s.length
  const arr = Array.from(s)
  reverse(arr, 0, n)
  reverse(arr, 0, k)
  reverse(arr, k, n)
  return arr.join('')
  function reverse(s, start, n) {
    let slow = start, fast = n - 1
    while(slow < fast) {
      const temp = s[slow]
      s[slow] = s[fast]
      s[fast] = temp
      slow++
      fast--
    }
  }
}

const s = 'abcdefg'
const s2 = rotateString(s, 2)
if (s2 === 'fgabcde') {
  console.log(true)
} else {
  console.log(false)
  console.error(s2)
}
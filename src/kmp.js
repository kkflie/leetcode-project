function getNext(next, s) {
  let j = -1
  const n = s.length
  next[0] = j
  for (let i = 1; i < n; i++) {
    while(j >= 0 && s[i] !== s[j + 1]) {
      j = next[j]
    }
    if (s[i] === s[j + 1]) {
      j++
    }
    next[i] = j
  }
}

function strStr(haystack, needle) {
  const next = []
  getNext(next, needle)
  let j = -1
  for (let i = 0; i < haystack.length; i++) {
    while (j >= 0 && haystack[i] !== needle[j + 1]) {
      j = next[j]
    }
    if (haystack[i] === needle[j + 1]) {
      j++
    }
    if (j === needle.length - 1) {
      return i - needle.length + 1
    }
  }
  return -1
}

// const s = 'aabaaf'
// const next = []
// getNext(next, s)
// console.log(next)
const idx = strStr('hello', 'll')
console.log('idx', idx)
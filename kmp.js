// 测试
// const needle = "aabaabaabaac";
// const haystack = 'kkkkkkkkaabaabaabaac'
// const needle = "ababcaabc";
// const haystack = 'ababcaababcaabc'
// const needle = "issip";
// const haystack = 'mississippi'
const needle = "ababcaabc";
const haystack = 'ababcaababcaabc'

function getNext(needle) {
  let j = -1
  const next = [-1]
  for (let i = 1; i < needle.length; i++) {
    while (j >= 0 && needle[i] !== needle[j + 1]) j = next[j]
    if (needle[i] === needle[j + 1]) j++
    next[i] = j
  }
  const nextVal = [...next]
  for (let i = 1; i < needle.length; i++) {
    if (needle[i] === needle[next[i - 1] + 1]) {
      nextVal[i - 1] = nextVal[next[i - 1]] || nextVal[i - 1]
    } else {
      nextVal[i] = next[i]
    }
  }
  console.log(next)
  console.log(nextVal)
  // return [-1,-1,0,1,-1,0,-1,1,-1]
  return [-1,-1,0,1,-1,0,0,1,-1]
  // return next
  return nextVal
}

// const res = getNext(pattern)
// console.log(res)


function getIdx(haystack, needle) {
  const next = getNext(needle)
  let j = -1
  for (let i = 0; i < haystack.length; i++) {
    if (i >= 6) {
      // debugger
    }
    while (j >= 0 && haystack[i] !== needle[j + 1]) {
      j = next[j]
    }
    if (haystack[i] === needle[j + 1]) {
      j++
    }
    if (j === needle.length - 1) {
      return i - j
    }
  }
  return -1
}

console.log('getIdx: ', getIdx(haystack, needle))
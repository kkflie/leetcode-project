/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var validSubstringCount = function(word1, word2) {
  const res = new Set()
  let count = 0
  word1 = word1.split('')
  const used = word1.map(() => false)
  backTrack(word1, [])

  Array.from(res).filter((e) => e!== word1).forEach((e) => {
    const res2 = new Set()
    getSubString(e.split(''), 0, [], res2)
    res2.forEach((e) => res.add(e))
    // console.log(res2)
    // count += validSubstringCount(e, word2)
  })

  console.log(res)
  console.log(res.size)
  // console.log(res2)
  // console.log('count', count)
  // const arr = res.filter((e) => e.indexOf(word2) === 0)

  function backTrack(word, path = []) {
    if (path.length === word.length) {
      const str = path.join('')
      if (!res.has(str) && isPrefix(path, word2)) {
        res.add(str)
        count++
      }
      return
    }
    for (let i = 0; i < word.length; i++) {
      if (i > 0 && word[i] === word[i - 1] && !used[i - 1]) continue
      if (used[i]) continue
      used[i] = true
      backTrack(word, path.concat(word[i])) 
      used[i] = false
    }
  }

  function isPrefix(arr, prefix) {
    if (arr.length <= prefix.length) return false
    for (let i = 0; i < prefix.length; i++) {
      if (prefix[i] !== arr[i]) return false
    }
    return true
  }

  function getSubString(arr, start = 0, path = [], res = []) {
    if (start === arr.length) {
      const str = path.join('')
      if (isPrefix(path, word2) && !res.has(str)) {
        res.add(str)
      }
      return
    }
    for (let i = start; i < arr.length; i++) {
      getSubString(arr, i + 1, path.concat(arr[i]), res)
    }
  }
  console.log('count', count)
  return count
};

// const word1 = 'bcca', word2 = 'abc'
const word1 = 'abcabc', word2 = 'abc'
validSubstringCount(word1, word2)
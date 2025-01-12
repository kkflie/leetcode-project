export function validSubstringCount(word1: string, word2: string): number {
  if (word1.length < word2.length) return 0
  const countArr = new Array(26).fill(0)
  const A_CODE = 'a'.charCodeAt(0)
  for (let i = 0; i < word2.length; i++) {
    const j = word2.charCodeAt(i) - A_CODE
    countArr[j]--
  }
  let diffNum = countArr.filter((e) => e < 0).length

  function update(i, addNum) {
    countArr[i] += addNum
    if (countArr[i] === 0 && addNum === 1) {
      diffNum--
    } else if (countArr[i] === -1 && addNum === -1) {
      diffNum++
    }
  }

  let l = 0, r = 0, res = 0
  while (l < word1.length) {
    while (r < word1.length && diffNum > 0) {
      update(word1.charCodeAt(r) - A_CODE, 1)
      r++
    }
    if (diffNum === 0) {
      res += word1.length - r + 1
    }
    update(word1.charCodeAt(l) - A_CODE, -1)
    l++
  }
  return res
};
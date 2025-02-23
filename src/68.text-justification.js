/*
 * @lc app=leetcode.cn id=68 lang=javascript
 * @lcpr version=30204
 *
 * [68] 文本左右对齐
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  const n = words.length
  let res = []
  const path = []
  let pathCharLen = 0
  const charLens = []
  for (let i = 0; i < n; i++) {
    const word = words[i]
    if (pathCharLen + word.length  + path.length <= maxWidth) {
      path.push(word)
      pathCharLen += word.length
    } else {
      res.push([...path])
      charLens.push(pathCharLen)
      path.length = 0
      path.push(word)
      pathCharLen = word.length
    }
  }
  if (path.length) {
    res.push([...path])
    charLens.push(pathCharLen)
  }
  for (let i = 0; i < res.length; i++) {
    const charLen = charLens[i]
    let spaces = maxWidth - charLen
    while (spaces > 0) {
      for (let j = 0; j < maxWidth; j++) {
        if (res[i][j] === undefined) break
        if (res[i][j] !== ' ' && spaces > 0) {
          if (j !== 0 && j === res[i].length - 1) continue
          res[i].splice(j + 1, 0, ' ')
          j++
          spaces--
        }
      }
      if (i === res.length - 1) {
        while (spaces) {
          res[i].push(' ')
          spaces--
        }
        break
      }
    }
    res.splice(i, 1, res[i].join(''))
  }
  return res
};
// @lc code=end

// const word = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"]
// const n = 20
// const res = fullJustify(word, n)
// // console.log(res.length)
// for (let i = 0; i < res.length; i++) [
//   console.log(res[i])
// ]


/*
// @lcpr case=start
// ["This", "is", "an", "example", "of", "text", "justification."]\n16\n
// @lcpr case=end

// @lcpr case=start
// ["What","must","be","acknowledgment","shall","be"]\n16\n
// @lcpr case=end

// @lcpr case=start
// ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we"\n20\n
// @lcpr case=end

 */


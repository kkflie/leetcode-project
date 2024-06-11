/*
 * @lc app=leetcode.cn id=17 lang=javascript
 * @lcpr version=30203
 *
 * [17] 电话号码的字母组合
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length < 1) {
    return []
  }
  const dic = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ]
  const k = digits.length
  const res = []
  let path = ''
  function backTrack(i) {
    if (path.length === k) {
      res.push(path)
      return
    }
      const word = dic[digits[i]]
      for (let j = 0; j < word.length; j++) {
        path += word[j]
        backTrack(i + 1)
        path = path.slice(0, i)
      }
  }
  backTrack(0)
  return res
};
// @lc code=end



/*
// @lcpr case=start
// "23"\n
// @lcpr case=end

// @lcpr case=start
// ""\n
// @lcpr case=end

// @lcpr case=start
// "2"\n
// @lcpr case=end

 */


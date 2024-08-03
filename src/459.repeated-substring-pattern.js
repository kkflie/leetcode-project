/*
 * @lc app=leetcode.cn id=459 lang=javascript
 * @lcpr version=30204
 *
 * [459] 重复的子字符串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  const next = getNext(s), n = s.length
  const m = next.length
  if (next[m - 1] !== -1 && n % (n - ((next[m - 1]) + 1)) === 0) {
    return true
  }
  return false

  function getNext(s) {
    const next = [-1], n = s.length
    let j = -1
    for (let i = 1; i < n; i++) {
      while (j >= 0 && s[i] !== s[j + 1]) {
        j = next[j]
      }
      if (s[i] === s[j + 1]) {
        j++
      }
      next[i] = j
    }
    return next
  }
};
// @lc code=end



/*
// @lcpr case=start
// "abab"\n
// @lcpr case=end

// @lcpr case=start
// "aba"\n
// @lcpr case=end

// @lcpr case=start
// "abcabcabcabc"\n
// @lcpr case=end

 */


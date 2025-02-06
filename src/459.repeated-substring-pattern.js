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
  // solution 1
  // const s2 = (s + s).substring(1, 2 * s.length - 1)
  // return ~(s2.indexOf(s))

  // solution 2 kmp
  function getNext(s) {
    let j = -1
    const next = [j]
    for (let i = 1; i < s.length; i++) {
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
  const next = getNext(s)
  const len = s.length
  if (next[len - 1] !== -1 && s.length % (len - (next[len - 1] + 1)) === 0) {
    return true
  }
  return false
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


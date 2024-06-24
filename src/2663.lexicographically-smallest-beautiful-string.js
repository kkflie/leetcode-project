/*
 * @lc app=leetcode.cn id=2663 lang=javascript
 * @lcpr version=30204
 *
 * [2663] 字典序最小的美丽字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestBeautifulString = function(s, k) {
  // review
  for (let i = s.length - 1; i >= 0; i--) {
    const set = new Set()
    for (let j = 1; j < 3; j++) {
      if (i - j >= 0) {
        set.add(s[i - j])
      }
    }
    for (let j = 1; j < 4; j++) {
      if (s.charCodeAt(i) - 'a'.charCodeAt(0) + 1 + j <= k && !set.has(String.fromCharCode(s.charCodeAt(i) + j))) {
        return generate(s, i , j)
      }
    }
  }
  return ''
  function generate(s, idx , offset) {
    const res = [...s]
    res[idx] = String.fromCharCode(s.charCodeAt(idx) + offset)
    for (let i = idx + 1; i < s.length; i++) {
      const set = new Set()
      for (let j = 1; j < 3; j++) {
        if (i - j >= 0) {
          set.add(res[i - j])
        }
      }
      for (let j = 0; j < 3; j++) {
        if (!set.has(String.fromCharCode('a'.charCodeAt(0) + j))) {
          res[i] = String.fromCharCode('a'.charCodeAt(0) + j)
          break
        }
      }
    }
    return res.join('')
  }
};
// @lc code=end



/*
// @lcpr case=start
// "abcz"\n26\n
// @lcpr case=end

// @lcpr case=start
// "dc"\n4\n
// @lcpr case=end

 */


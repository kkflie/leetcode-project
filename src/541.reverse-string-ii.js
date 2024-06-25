/*
 * @lc app=leetcode.cn id=541 lang=javascript
 * @lcpr version=30204
 *
 * [541] 反转字符串 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let res = ''
  for (let i = 0; i < s.length; i += 2 * k) {
    if (i + k >= s.length) {
      res += reverse(s, i, s.length)
    } else {
      res += reverse(s, i, i + k) + s.slice(i + k, i + 2 * k)
    }
  } 
  return res
  function reverse(s, start, end) {
    let i = start, j = end - 1
    let res = ''
    while(i <= j) {
      res += s[j]
      j--
    }
    return res
  }
};
// @lc code=end



/*
// @lcpr case=start
// "abcdefg"\n2\n
// @lcpr case=end

// @lcpr case=start
// "abcd"\n2\n
// @lcpr case=end

 */


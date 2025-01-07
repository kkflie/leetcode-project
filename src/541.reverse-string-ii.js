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
  function reverse(s, start, end) {
    let i = start, j = end
    while (i <= j) {
      [s[i], s[j]] = [s[j], s[i]]
      i++
      j--
    }
  }
  const arr = s.split('')
  for (let i = 0; i < s.length; i += 2 * k) {
    if (i + k >= s.length) {
      reverse(arr, i, s.length - 1)
    } else {
      reverse(arr, i, i + k - 1)
    }
  }
  return arr.join('')
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


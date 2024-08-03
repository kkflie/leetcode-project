/*
 * @lc app=leetcode.cn id=344 lang=javascript
 * @lcpr version=30204
 *
 * [344] 反转字符串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  const n = s.length
  for (let i = 0; i < n >> 1; i++) {
    const temp = s[i]
    s[i] = s[n - i - 1]
    s[n - i - 1] = temp
  }
};
// @lc code=end



/*
// @lcpr case=start
// ["h","e","l","l","o"]\n
// @lcpr case=end

// @lcpr case=start
// ["H","a","n","n","a","h"]\n
// @lcpr case=end

 */


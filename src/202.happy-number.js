/*
 * @lc app=leetcode.cn id=202 lang=javascript
 * @lcpr version=30204
 *
 * [202] 快乐数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const mp = {}
  let res = n
  while(1) {
    res = calc(res)
    if (res === 1) {
      return true
    }
    if (mp[res]) {
      return false
    } else {
      mp[res] = true
    }
  }
  return false
  function calc(n) {
    n = n + ''
    let res = 0
    for (let i = 0; i < n.length; i++) {
      res += (n[i] - 0) * (n[i] - 0)
    }
    return res
  }
};
// @lc code=end



/*
// @lcpr case=start
// 19\n
// @lcpr case=end

// @lcpr case=start
// 2\n
// @lcpr case=end

 */


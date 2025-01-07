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
  const set = new Set()
  function calc(n) {
    return n.toString().split('')
      .reduce((pre, cur) => pre + +(cur * cur), 0)
  }
  while(1) {
    n = calc(n)
    if (n=== 1) return true
    if (set.has(n)) {
      return false
    }
    set.add(n)
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


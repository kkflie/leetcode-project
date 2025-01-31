/*
 * @lc app=leetcode.cn id=367 lang=javascript
 * @lcpr version=30204
 *
 * [367] 有效的完全平方数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let i = 0, j = num
  while(i <= j) {
    const mid = (i + j) >> 1
    const num2 = mid * mid
    if (num2 === num) return true
    else if (num2 < num) i = mid + 1
    else j = mid - 1 
  } 
  return false
};
// @lc code=end



/*
// @lcpr case=start
// 16\n
// @lcpr case=end

// @lcpr case=start
// 14\n
// @lcpr case=end

 */


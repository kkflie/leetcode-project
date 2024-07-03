/*
 * @lc app=leetcode.cn id=3099 lang=javascript
 * @lcpr version=30204
 *
 * [3099] 哈沙德数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
  const total = (x + '').split('').reduce((pre, cur) => pre + (cur - 0), 0)
  if (x % total === 0) return total
  return -1
};
// @lc code=end



/*
// @lcpr case=start
// 18\n
// @lcpr case=end

// @lcpr case=start
// 23\n
// @lcpr case=end

 */


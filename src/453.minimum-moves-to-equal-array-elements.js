/*
 * @lc app=leetcode.cn id=453 lang=javascript
 * @lcpr version=30204
 *
 * [453] 最小操作次数使数组元素相等
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  const n = nums.length
  if (n === 1) return 0
  const min = Math.min(...nums)
  return nums.reduce((pre, cur) => pre + cur - min, 0)
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1]\n
// @lcpr case=end

 */


/*
 * @lc app=leetcode.cn id=2974 lang=javascript
 * @lcpr version=30204
 *
 * [2974] 最小数字游戏
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
  nums.sort((a, b) => a - b)
  for (let i = 1; i < nums.length; i += 2) {
    [nums[i -1], nums[i]] = [nums[i], nums[i - 1]]
  }
  return nums
};
// @lc code=end



/*
// @lcpr case=start
// [5,4,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,5]\n
// @lcpr case=end

 */


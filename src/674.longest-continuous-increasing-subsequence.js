/*
 * @lc app=leetcode.cn id=674 lang=javascript
 * @lcpr version=30204
 *
 * [674] 最长连续递增序列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  const dp = new Array(nums.length).fill(1)
  let max = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1
      max = Math.max(dp[i], max)
    }
  }
  return max
};
// @lc code=end



/*
// @lcpr case=start
// [1,3,5,4,7]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,2,2,2]\n
// @lcpr case=end

 */


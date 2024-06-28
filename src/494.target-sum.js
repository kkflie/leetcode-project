/*
 * @lc app=leetcode.cn id=494 lang=javascript
 * @lcpr version=30204
 *
 * [494] 目标和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  // review
  const total = nums.reduce((a, b) => a + b)
  if (Math.abs(target) > total) return 0
  if ((total + target) % 2) return 0
  const half = (total + target) / 2
  const dp = new Array(half + 1).fill(0)
  dp[0] = 1
  for (let i = 0; i < nums.length; i++) {
    for (let j = half; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]]
    }
  }
  return dp[half]
};
// @lc code=end



/*
// @lcpr case=start
// [1,1,1,1,1]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

 */


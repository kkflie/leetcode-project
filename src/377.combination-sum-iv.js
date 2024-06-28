/*
 * @lc app=leetcode.cn id=377 lang=javascript
 * @lcpr version=30204
 *
 * [377] 组合总和 Ⅳ
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  // review
  const dp = new Array(target + 1).fill(0)
  dp[0] = 1
  for (let j = 1; j <= target; j++) {
    for (let i = 0; i < nums.length; i++) {
      if (j >= nums[i]) dp[j] += dp[j - nums[i]]
    }
    console.log(dp)
  }
  return dp[target]
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n4\n
// @lcpr case=end

// @lcpr case=start
// [9]\n3\n
// @lcpr case=end

 */


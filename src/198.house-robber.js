/*
 * @lc app=leetcode.cn id=198 lang=javascript
 * @lcpr version=30204
 *
 * [198] 打家劫舍
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // review
  const dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }
  // console.log(dp)
  return dp[dp.length - 1] > dp[dp.length - 2] ? dp[dp.length - 1] : dp[dp.length - 2]
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [2,7,9,3,1]\n
// @lcpr case=end

 */


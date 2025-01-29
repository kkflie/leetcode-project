/*
 * @lc app=leetcode.cn id=2270 lang=javascript
 * @lcpr version=30204
 *
 * [2270] 分割数组的方案数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
  const dp = [nums[0]] 
  for (let i = 1; i < nums.length; i++) {
    dp[i] = dp[i - 1] + nums[i]
  }
  const sum = dp[dp.length - 1]
  let res = 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (dp[i] >= sum - dp[i]) {
      res++
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [10,4,-8,7]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,1,0]\n
// @lcpr case=end

 */


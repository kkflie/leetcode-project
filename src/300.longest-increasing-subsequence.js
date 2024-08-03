/*
 * @lc app=leetcode.cn id=300 lang=javascript
 * @lcpr version=30204
 *
 * [300] 最长递增子序列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const dp = new Array(nums.length).fill(1)
  let max = 0 - Number.MAX_SAFE_INTEGER
  for (let i = 1; i < nums.length; i++) {
    let max2 = 0
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        max2 = Math.max(max2, dp[j])
      }
    }
    dp[i] = max2 + 1
    max = Math.max(max, dp[i])
  }
  return Math.max(max, 1)
};
// @lc code=end



/*
// @lcpr case=start
// [10,9,2,5,3,7,101,18]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,0,3,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [7,7,7,7,7,7,7]\n
// @lcpr case=end

 */


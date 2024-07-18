/*
 * @lc app=leetcode.cn id=416 lang=javascript
 * @lcpr version=30203
 *
 * [416] 分割等和子集
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  // review
  const sum = nums.reduce((a, b) => a + b)
  if (sum % 2 !== 0) return false
  const mid = sum >> 1, n = nums.length
  const dp = new Array(mid + 1).fill(0)
  for (let i = 0; i < n; i++) {
    for (let j = mid; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j - nums[i]] + nums[i], dp[j])
      if (dp[j] === mid) return true
    }
  }
  return false
};
// @lc code=end



/*
// @lcpr case=start
// [1,5,11,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,5]\n
// @lcpr case=end

 */


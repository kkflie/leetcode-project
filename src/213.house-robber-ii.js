/*
 * @lc app=leetcode.cn id=213 lang=javascript
 * @lcpr version=30204
 *
 * [213] 打家劫舍 II
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
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  const n = nums.length
  return Math.max(robRange(nums, 0, n - 2), robRange(nums, 1, n - 1))
  function robRange(nums, start, end) {
    if (start === end) return nums[start]
    const dp = new Array(nums.length).fill(0)
    dp[start] = nums[start]
    dp[start + 1] = Math.max(nums[start], nums[start + 1])
    for (let i = start + 2; i <= end; i++) {
      dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    }
    return dp[end]
  }
};
// @lc code=end



/*
// @lcpr case=start
// [2,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

 */


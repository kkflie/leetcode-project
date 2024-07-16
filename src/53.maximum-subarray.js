/*
 * @lc app=leetcode.cn id=53 lang=javascript
 * @lcpr version=30204
 *
 * [53] 最大子数组和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // 贪心
  const n = nums.length
  let res = 0 - Number.MAX_SAFE_INTEGER
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += nums[i]
    if (sum > res) {
      res = sum
    }
    if (sum < 0) sum = 0
  }
  return res
  // 动态规划
  // let max = nums[0]
  // const n = nums.length
  // for (let i = 1; i < n; i++) {
  //   nums[i] = Math.max(nums[i], nums[i - 1] + nums[i])
  //   max = Math.max(nums[i], max)
  // }
  // return max
};
// @lc code=end



/*
// @lcpr case=start
// [-2,1,-3,4,-1,2,1,-5,4]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [5,4,-1,7,8]\n
// @lcpr case=end

 */


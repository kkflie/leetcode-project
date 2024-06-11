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
  const sum0 = nums.reduce((a, b) => a+b, 0)
  if (sum0 % 2 !==0){
    return false
  }
  const target = Math.floor(sum0 / 2)
  let flag = false
  const dp = new Array(target+1).fill(0)
  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
      if (dp[j] === target) {
        flag = true
      }
    }
  }
  // console.log(dp)
  return flag
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


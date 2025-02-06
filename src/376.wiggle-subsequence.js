/*
 * @lc app=leetcode.cn id=376 lang=javascript
 * @lcpr version=30204
 *
 * [376] 摆动序列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  // 动态规划
  const n = nums.length
  const dp = new Array(n).fill(undefined)
    .map(() => new Array(2).fill(0))
  dp[0][0] = dp[0][1] = 1
  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i][1] = 1
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1)
      }
    }
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[i]) {
        dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1)
      }
    }
  }
  return Math.max(dp[n - 1][0], dp[n - 1][1])
  // 贪心
  // if (nums.length === 1) return 1
  // let res = 0, pre = 0
  // const n = nums.length
  // for (let i = 1; i < n; i++) {
  //   const diff = nums[i] - nums[i - 1]
  //   if (
  //     (diff === 0) ||
  //     (pre !== 0 && pre * diff > 0)
  //   ) continue
  //   pre = diff
  //   res++
  // }
  // return res + 1
};
// @lc code=end



/*
// @lcpr case=start
// [1,7,4,9,2,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,17,5,10,13,15,10,5,16,8]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5,6,7,8,9]\n
// @lcpr case=end

 */


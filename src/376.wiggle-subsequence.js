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
  const n = nums.length
  const dp = new Array(n).fill(undefined)
    .map(() => new Array(2).fill(0))
  dp[0][0] = dp[0][1] = 1
  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i][1] = 1
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[i]) {
        dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1)
      }
    }
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1)
      }
    }
  }
  return Math.max(dp[n - 1][0], dp[n - 1][1])
  // 贪心
  // const arr = []
  // let count= 0
  // for (let i = 1; i < nums.length; i++) {
  //   const res = nums[i] - nums[i - 1]
  //   if (
  //     res === 0 ||
  //     (arr.length &&
  //      arr[0] * res > 0)
  //   ) continue
  //   arr[0] = res
  //   count++
  // }
  // return count < 2 && arr[0] === 0 ? 1 : count + 1
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


/*
 * @lc app=leetcode.cn id=2786 lang=javascript
 * @lcpr version=30203
 *
 * [2786] 访问数组中的位置使分数最大
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var maxScore = function(nums, x) {
  let res = nums[0]
  const dp = [nums[0]]
  let odd = -1
  let even = -1
  if (nums[0] % 2 === 0) {
    even = 0
  } else {
    odd = 0
  }
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    if (i === 1) {
      dp[i] = dp[0] + num + gap(num, nums[0])
    } else {
      if (isSame(num, nums[i -1])) {
        dp[i] = dp[i - 1] + num
      } else {
        const idx = getLastIdx(num)
        if (idx < 0) {
          dp[i] = Math.max(dp[i - 1] + num -x, dp[0] + num + gap(num, nums[0]))
        } else {
          dp[i] = Math.max(dp[i - 1] + num -x, dp[idx] + num)
        }
      }
    }
    if (num % 2 === 0) {
      even = i
    } else {
      odd = i
    }
    if (dp[i] > res) {
      res = dp[i]
    }
  }
  return res

  function isSame(a, b) {
    return (a + b) % 2 === 0
  }
  function gap(a, b) {
    if (isSame(a, b)) {
      return 0
    }
    return -x
  }
  function getLastIdx(num) {
    const flag = num % 2 === 0
    if (flag) {
      return even
    }
    return odd
  }
};
// @lc code=end



/*
// @lcpr case=start
// [2,3,6,1,9,2]\n5\n
// @lcpr case=end

// @lcpr case=start
// [2,4,6,8]\n3\n
// @lcpr case=end

 */


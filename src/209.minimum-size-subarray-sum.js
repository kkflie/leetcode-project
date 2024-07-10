/*
 * @lc app=leetcode.cn id=209 lang=javascript
 * @lcpr version=30204
 *
 * [209] 长度最小的子数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  // review
  const n = nums.length
  let i = n - 1
  let sum = 0
  let minLen = Number.MAX_SAFE_INTEGER
  for (let j = n - 1; j >= 0; j--) {
    sum += nums[j]
    while(sum >= target) {
      minLen = Math.min(minLen, i - j + 1)
      sum -= nums[i]
      i--
    }
  }
  if (minLen < Number.MAX_SAFE_INTEGER) return minLen
  return 0
};
// @lc code=end



/*
// @lcpr case=start
// 7\n[2,3,1,2,4,3]\n
// @lcpr case=end

// @lcpr case=start
// 4\n[1,4,4]\n
// @lcpr case=end

// @lcpr case=start
// 11\n[1,1,1,1,1,1,1,1]\n
// @lcpr case=end

 */


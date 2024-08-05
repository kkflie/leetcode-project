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
  const n = nums.length
  let l = 0, r = 0, min = Number.MAX_SAFE_INTEGER
  let sum1 = 0
  while (r < n) {
    sum1 += nums[r]
    while (sum1 >= target) {
      min = Math.min(min, r - l + 1)
      sum1 -= nums[l++]
    }
    r++
  }
  return min === Number.MAX_SAFE_INTEGER ? 0 : min
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


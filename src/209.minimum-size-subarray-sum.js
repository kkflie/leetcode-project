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
  let slow = fast = 0
  let sum = 0
  let minLen = Infinity
  while (fast < nums.length) {
    sum += nums[fast++]
    while (sum >= target) {
      minLen = Math.min(minLen, fast - slow)
      sum -= nums[slow++]
    }
  }
  return minLen === Infinity ? 0 : minLen
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


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
  let i = 0
  let j = 0
  let res = 0
  let minLen = Number.MAX_SAFE_INTEGER
  while (j < nums.length) {
    res += nums[j]
    while(res >= target) {
      const subLen = j - i + 1
      minLen = minLen < subLen ? minLen : subLen
      res -=[nums[i++]]
    }
    j++
  }
  return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen
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


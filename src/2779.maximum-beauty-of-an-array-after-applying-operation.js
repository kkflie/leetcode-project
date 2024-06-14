/*
 * @lc app=leetcode.cn id=2779 lang=javascript
 * @lcpr version=30203
 *
 * [2779] 数组的最大美丽值
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
  if (nums.length < 1) {
    return 0 
  }
  const flag = nums.every(e => e === nums[0])
  if (flag) {
    return nums.length
  }
  nums.sort((a, b) => b - a)
  let maxLen = 0
  for (let i = 0, j = 0; i < nums.length - maxLen; i++) {
      while (nums[i] - nums[j] <= 2 * k) {
        j++
      }
      maxLen = maxLen < j - i  ? j - i : maxLen
  }
  return maxLen
};
// @lc code=end



/*
// @lcpr case=start
// [4,6,1,2]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,1]\n10\n
// @lcpr case=end

 */


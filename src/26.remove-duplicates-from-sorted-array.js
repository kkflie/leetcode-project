/*
 * @lc app=leetcode.cn id=26 lang=javascript
 * @lcpr version=30202
 *
 * [26] 删除有序数组中的重复项(双指针)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums.length
  const n = nums.length
  let i = 0, j = 1
  while (j < n) {
    if (nums[i] === nums[j]) {
      j++
    } else {
      nums[++i] = nums[j++]
    }
  }
  return i + 1
};
module.exports = removeDuplicates 
// @lc code=end



/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,2,2,3,3,4]\n
// @lcpr case=end

 */


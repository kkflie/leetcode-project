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
  if (nums.length < 2) {
    return nums.length
  }
  let len = 0
  let tail = nums[nums.length - 1]
  for (let i = 0; i < nums.length; i++) {
    if (nums[len] !== nums[i]) {
      nums[++len] = nums[i]
      if (nums[len] === tail && nums[i + 1] === tail) {
        break
      }
    }
  }
  return len + 1
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


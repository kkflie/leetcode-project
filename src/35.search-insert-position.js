/*
 * @lc app=leetcode.cn id=35 lang=javascript
 * @lcpr version=30202
 *
 * [35] 搜索插入位置
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0
  const len = nums.length
  let right = len - 1
  if (nums[len - 1] === target) {
    return len - 1
  } else if (nums[len - 1] < target) {
    return len
  } else if (nums[0] >= target) {
    return 0
  }
  while (left <= right) {
    const middle = Math.floor((right - left) / 2) + left
    if (nums[middle] === target) {
      return middle
    } else if (nums[middle] > target) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return left
};
// @lc code=end



/*
// @lcpr case=start
// [1,3,5,6]\n5\n
// @lcpr case=end

// @lcpr case=start
// [1,3,5,6]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,3,5,6]\n7\n
// @lcpr case=end

 */


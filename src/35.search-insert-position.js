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
  let i = 0, j = nums.length
  while (i < j) {
    const mid = (i + j) >> 1, num = nums[mid]
    if (num === target) return mid
    else if (num > target) j = mid
    else i = mid + 1
  }
  return i
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


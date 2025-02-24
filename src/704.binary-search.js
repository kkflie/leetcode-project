/*
 * @lc app=leetcode.cn id=704 lang=javascript
 * @lcpr version=30203
 *
 * [704] 二分查找
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let i = 0, j = nums.length
  while (i < j) {
    const mid = (i + j) >> 1
    const num = nums[mid]
    if (num === target) return mid
    else if (num < target) {
      i = mid + 1
    } else {
      j = mid
    }
  }
  return -1
};
// @lc code=end



/*
// @lcpr case=start
// [-1,0,3,5,9,12]\n9\n
// @lcpr case=end

// @lcpr case=start
// [-1,0,3,5,9,12]\n2\n
// @lcpr case=end

 */


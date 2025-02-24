/*
 * @lc app=leetcode.cn id=34 lang=javascript
 * @lcpr version=30204
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (!nums.length || target < nums[0] || target > nums[nums.length - 1]) return [-1, -1]
  let i = 0, j = nums.length
  let mid
  while (i < j) {
    mid = (i + j) >> 1
    const num = nums[mid]
    if (num === target) break
    else if (num > target) j = mid
    else i = mid + 1
  }
  if (i >= j) return [-1, -1]
  i = j = mid
  while (nums[i] === target) {
    i--
  }
  while (nums[j] === target) {
    j++
  }
  return [i + 1, j - 1]
};
// @lc code=end



/*
// @lcpr case=start
// [5,7,7,8,8,10]\n8\n
// @lcpr case=end

// @lcpr case=start
// [5,7,7,8,8,10]\n6\n
// @lcpr case=end

// @lcpr case=start
// []\n0\n
// @lcpr case=end

 */


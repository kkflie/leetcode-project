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
  if (nums[nums.length-1] < target) return[-1,-1]
  let start = -1, end = -1
  let i = 0
  const n = nums.length
  while (i < n) {
    if (start < 0 && nums[i] === target) {
      start = i
    }
    if (nums[i] > target) {
      if (start < 0) return [-1, -1]
      return [start, i - 1]
    }
    i++
  }
  if (start>=0)return[start,n-1]
  return [start,end]
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


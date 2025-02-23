/*
 * @lc app=leetcode.cn id=81 lang=javascript
 * @lcpr version=30204
 *
 * [81] 搜索旋转排序数组 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  const n = nums.length
  if (n < 2) return nums[0] === target
  let i = 0, j = n
  while (i < j) {
    const mid = (i + j) >> 1
    if (nums[mid] === target) return true
    else if (nums[i] === nums[mid] && nums[mid] === nums[j - 1]) {
      i++
      j--
    } else if (nums[i] <= nums[mid]) {
      if (nums[i] <= target && target < nums[mid]) {
        j = mid
      } else {
        i = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[n - 1]) {
        i = mid + 1
      } else {
        j = mid
      }
    }
  }
  return false
};
// @lc code=end



/*
// @lcpr case=start
// [2,5,6,0,0,1,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [2,5,6,0,0,1,2]\n3\n
// @lcpr case=end

 */


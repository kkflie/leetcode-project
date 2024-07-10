/*
 * @lc app=leetcode.cn id=2970 lang=javascript
 * @lcpr version=30204
 *
 * [2970] 统计移除递增子数组的数目 I
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function(nums) {
  // review
  const n = nums.length
  let l = 1
  let res = 0
  while (l < n && nums[l] > nums[l - 1]) {
    l++
  }
  res += l + (l < n ? 1 : 0)
  // console.log('l', l)
  for (let r = n - 2; r >= 0; r--) {
    while (l > 0 && nums[l - 1] >= nums[r + 1]) {
      // console.log('k', l, r, nums[l - 1], nums[r + 1])
      l--
    }
    console.log('l', l, r)
    res += l + (l <= r ? 1 : 0)
    if (nums[r] >= nums[r + 1]) {
      break
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [6,5,7,8]\n
// @lcpr case=end

// @lcpr case=start
// [8,7,6,6]\n
// @lcpr case=end

 */


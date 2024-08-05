/*
 * @lc app=leetcode.cn id=977 lang=javascript
 * @lcpr version=30203
 *
 * [977] 有序数组的平方
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const n = nums.length
  const arr = []
  let l = 0, r = n - 1
  while (l <= r) {
    const a1 = nums[l] * nums[l]
    const a2 = nums[r] * nums[r]
    if (a2 > a1) {
      arr.unshift(a2)
      r--
    } else {
      arr.unshift(a1)
      l++
    }
  }
  return arr
};
// @lc code=end



/*
// @lcpr case=start
// [-4,-1,0,3,10]\n
// @lcpr case=end

// @lcpr case=start
// [-7,-3,2,3,11]\n
// @lcpr case=end

 */


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
  let i = 0, j = n - 1
  while(i <= j) {
    const a = nums[i] * nums[i]
    const b = nums[j] * nums[j]
    if (a > b) {
      arr.unshift(a)
      i++
    } else {
      arr.unshift(b)
      j--
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


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
  let i =0
  let j = nums.length - 1
  let k = nums.length - 1
  const res = []
  while (i <= j) {
    const n1 = nums[i] * nums[i]
    const n2 = nums[j] * nums[j]
    if (n1 > n2) {
      res[k--] = n1
      i++
    } else {
      res[k--] = n2
      j--
    }
  }
  return res
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


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
  nums = nums.map((n) => n * n)
  const res = []
  let k = nums.length - 1
  let i = 0, j = nums.length - 1
  while (i <= j) {
    if (nums[i] < nums[j]) {
      res[k--] = nums[j--]
    } else {
      res[k--] = nums[i++]
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


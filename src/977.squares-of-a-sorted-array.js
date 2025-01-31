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
  for (let i = 0; i < n; i++) {
    nums[i] = nums[i] * nums[i]
  }
  let i = 0, j = n - 1, k = n - 1
  const res = []
  while (k >= 0) {
    if (nums[i] > nums[j]) {
      res[k--] = nums[i++] 
    } else {
      res[k--] = nums[j--]
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


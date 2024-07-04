/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 * @lcpr version=30204
 *
 * [1005] K 次取反后最大化的数组和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  // review
  nums.sort((a, b) => Math.abs(b) - Math.abs(a))
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] *= -1
      k--
    }
  }
  if (k % 2 === 1) nums[nums.length - 1] *= -1
  console.log(nums)
  return nums.reduce((a, b) => a + b)
  
};
// @lc code=end



/*
// @lcpr case=start
// [4,2,3]\n1\n
// @lcpr case=end

// @lcpr case=start
// [3,-1,0,2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [2,-3,-1,5,-4]\n2\n
// @lcpr case=end

 */


/*
 * @lc app=leetcode.cn id=238 lang=javascript
 * @lcpr version=30204
 *
 * [238] 除自身以外数组的乘积
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // review
  const left = [1]
  const n = nums.length
  let res = 1
  for (let i = 1; i < n; i++) {
    left[i] = res * nums[i - 1]
    res = left[i]
  }
  res = 1
  const right = new Array(n).fill(1)
  for (let i = n - 2; i >= 0; i--) {
    right[i] = res * nums[i + 1]
    res = right[i]
    right[i] *= left[i]
  }
  right[n - 1] *= left[n - 1]
  return right
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [-1,1,0,-3,3]\n
// @lcpr case=end

 */


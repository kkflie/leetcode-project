/*
 * @lc app=leetcode.cn id=724 lang=javascript
 * @lcpr version=30204
 *
 * [724] 寻找数组的中心下标
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  const total = nums.reduce((a,b)=>a+b)
  const n = nums.length
  let i = 0
  let left = 0, right = total - nums[0]
  while(i < n) {
    // console.log(left, right)
    if (left !== right) {
      left += nums[i++]
      right -= nums[i]
    } else {
      return i
    }
  }
  return -1
};
// @lc code=end



/*
// @lcpr case=start
// [1, 7, 3, 6, 5, 6]\n
// @lcpr case=end

// @lcpr case=start
// [1, 2, 3]\n
// @lcpr case=end

// @lcpr case=start
// [2, 1, -1]\n
// @lcpr case=end

 */


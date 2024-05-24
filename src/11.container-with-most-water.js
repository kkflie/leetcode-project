/*
 * @lc app=leetcode.cn id=11 lang=javascript
 * @lcpr version=30202
 *
 * [11] 盛最多水的容器
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0
  let len = height.length
  let right = len - 1 
  let max = 0
  while(left < right) {
    const h1 = height[left]
    const h2 = height[right]
    const min = h1 > h2 ? h2 : h1
    const num = (right - left) * min
    if (num > max) {
      max = num
    }
    if (h1 < h2) {
      left++
    } else {
      right--
    }
  }
  return max
};
module.exports = maxArea
// @lc code=end



/*
// @lcpr case=start
// [1,8,6,2,5,4,8,3,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,1]\n
// @lcpr case=end

 */


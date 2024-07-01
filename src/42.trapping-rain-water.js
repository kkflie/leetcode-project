/*
 * @lc app=leetcode.cn id=42 lang=javascript
 * @lcpr version=30204
 *
 * [42] 接雨水
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // review
  const stack = [0]
  let sum = 0
  for(let i = 1; i < height.length; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const mid = stack[stack.length - 1]
      stack.pop()
      if (stack.length) {

      const h = Math.min(height[stack[stack.length - 1]], height[i]) - height[mid]
      const w = i - stack[stack.length - 1] - 1
      console.log(w, h) 
      sum += h * w
      }
      // console.log(sum)
    }
    stack.push(i)
  }
  return sum
};
// @lc code=end



/*
// @lcpr case=start
// [0,1,0,2,1,0,1,3,2,1,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [4,2,0,3,2,5]\n
// @lcpr case=end

 */


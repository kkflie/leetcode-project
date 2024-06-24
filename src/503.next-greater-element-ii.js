/*
 * @lc app=leetcode.cn id=503 lang=javascript
 * @lcpr version=30204
 *
 * [503] 下一个更大元素 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const n = nums.length
  const res = new Array(n).fill(-1)
  const stack = []
  for (let i = 0; i < n * 2 - 1; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % n]) {
      res[stack[stack.length - 1]] = nums[i % n]
      stack.pop()
    }
    stack.push(i % n)
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,3]\n
// @lcpr case=end

 */


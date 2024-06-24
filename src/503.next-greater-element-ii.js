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
  const res = []
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1
    let flag = false
    while (j < nums.length) {
      if (nums[j] > nums[i]) {
        flag = true
        res.push(nums[j])
        break
      }
      j++
    }
    if (!flag) {
      j = 0
      while (j < i) {
        if (nums[j] > nums[i]) {
          flag = true
          res.push(nums[j])
          break
        }
        j++
      }
    }
    if (!flag) {
      res.push(-1)
    }
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


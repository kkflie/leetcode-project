/*
 * @lc app=leetcode.cn id=496 lang=javascript
 * @lcpr version=30204
 *
 * [496] 下一个更大元素 I
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  // review
  const stack = []
  const map = {}
  for (let i = 0; i < nums2.length; i++) {
    while(stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
      let idx = stack.pop()
      map[nums2[idx]] = nums2[i]
    }
    stack.push(i)
  }
  const res = new Array(nums1.length).fill(-1)
  for (let i = 0; i < nums1.length; i++) {
    res[i] = map[nums1[i]] || -1
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [4,1,2]\n[1,3,4,2].\n
// @lcpr case=end

// @lcpr case=start
// [2,4]\n[1,2,3,4].\n
// @lcpr case=end

 */


/*
 * @lc app=leetcode.cn id=2956 lang=javascript
 * @lcpr version=30204
 *
 * [2956] 找到两个数组中的公共元素
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
  const m1 = new Set(nums1), m2 = new Set(nums2)
  let res = [0, 0]
  for (let i = 0; i < nums1.length; i++) {
    if (m2.has(nums1[i])) {
      res[0]++
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (m1.has(nums2[i])) {
      res[1]++
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [4,3,2,3,1]\n[2,2,5,2,3,6]\n
// @lcpr case=end

// @lcpr case=start
// [3,4,2,3]\n[1,5]\n
// @lcpr case=end

 */


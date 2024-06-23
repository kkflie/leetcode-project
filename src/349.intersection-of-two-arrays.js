/*
 * @lc app=leetcode.cn id=349 lang=javascript
 * @lcpr version=30204
 *
 * [349] 两个数组的交集
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let i = 0, j = 0
  const res = new Set()
  const mp = {}
  while (i < nums1.length) {
    if (!mp[nums1[i]]) {
      mp[nums1[i]] = true
    }
    i++
  }

  while (j < nums2.length) {
    if (mp[nums2[j]]) {
      res.add(nums2[j])
    }
    j++
  }
  return Array.from(res)
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,2,1]\n[2,2]\n
// @lcpr case=end

// @lcpr case=start
// [4,9,5]\n[9,4,9,8,4]\n
// @lcpr case=end

 */


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
  const set = new Set()
  for (let i of nums1) {
    set.add(i)
  }

  const set2 = new Set()
  for (let i of nums2) {
    if (set.has(i)) {
      set2.add(i)
    }
  }
  return Array.from(set2)
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


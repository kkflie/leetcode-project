/*
 * @lc app=leetcode.cn id=90 lang=javascript
 * @lcpr version=30203
 *
 * [90] 子集 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const res = []
  const path = []
  const n = nums.length
  nums.sort((a, b) => a - b)
  backTrack(0, new Array(n).fill(false))
  function backTrack(start) {
    res.push([...path])
    for (let i = start; i < n; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue
      }
      path.push(nums[i])
      backTrack(i + 1)
      path.pop()
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,2]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */


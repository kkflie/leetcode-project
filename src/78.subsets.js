/*
 * @lc app=leetcode.cn id=78 lang=javascript
 * @lcpr version=30203
 *
 * [78] 子集
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = []
  let path = []
  function backTrack(start, end) {
    res.push([...path])
    if (start >= end) {
      return
    }
    for (let i = start; i < end; i++) {
      const num = nums[i]
      path.push(num)
      backTrack(i + 1, end)
      path.pop()
    }
  }
  backTrack(0, nums.length)
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */


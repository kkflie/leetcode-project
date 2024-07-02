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
  const len = nums.length
  backTrack(0)
  function backTrack(start) {
    res.push([...path])
    for (let i = start; i < len; i++) {
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
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */


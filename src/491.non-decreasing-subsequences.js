/*
 * @lc app=leetcode.cn id=491 lang=javascript
 * @lcpr version=30203
 *
 * [491] 非递减子序列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  let res = []
  let path = []
  // nums.sort((a, b) => a - b)
  const len = nums.length
  backTrack(0)
  function backTrack(start) {
    if (path.length > 1) {
      res.push([...path])
    }
    const used = []
    for (let i = start; i < len; i++) {
      if (nums[i] < path[path.length - 1]) {
        continue
      }
      if (used[100 + nums[i]] === 1) {
        continue
      }
      used[100 + nums[i]] = 1
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
// [4,6,7,7]\n
// @lcpr case=end

// @lcpr case=start
// [4,4,3,2,1]\n
// @lcpr case=end

 */


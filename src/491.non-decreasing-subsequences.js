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

  function backTrack(start) {
    if (path.length > 1) {
      res.push([...path])
    }
    let used = []
    for (let i = start; i < nums.length; i++) {
      if (path.length > 0 && nums[i] < path[path.length - 1] || used[nums[i] + 100]) {
        continue
      }
      path.push(nums[i])
      used[nums[i] + 100] = true
      backTrack(i + 1)
      path.pop()
    }
  }

  backTrack(0)
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


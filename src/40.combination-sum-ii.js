/*
 * @lc app=leetcode.cn id=40 lang=javascript
 * @lcpr version=30203
 *
 * [40] 组合总和 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b)
  const n = candidates.length
  const res = []
  const path = []
  backTrack(0, 0)
  function backTrack(start, sum) {
    if (sum === target) {
      res.push([...path])
      return
    }
    for (let i = start; i < n; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue
      }
      const num = candidates[i]
      if (sum + num > target) {
        return
      }
      path.push(num)
      backTrack(i + 1, sum + num)
      path.pop()
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [10,1,2,7,6,1,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2,5,2,1,2]\n5\n
// @lcpr case=end

 */


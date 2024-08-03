/*
 * @lc app=leetcode.cn id=39 lang=javascript
 * @lcpr version=30203
 *
 * [39] 组合总和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const res = []
  const path = []
  const n = candidates.length
  let sum = 0
  backTrack(0)
  function backTrack(start) {
    if (sum === target) {
      res.push([...path])
      return
    }
    for (let i = start; i < n; i++) {
      const num = candidates[i]
      if (sum + num > target) {
        continue
      }
      sum += num
      path.push(num)
      backTrack(i)
      sum -= num
      path.pop()
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [2,3,6,7]\n7\n
// @lcpr case=end

// @lcpr case=start
// [2,3,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2]\n1\n
// @lcpr case=end

 */


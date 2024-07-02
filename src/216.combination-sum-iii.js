/*
 * @lc app=leetcode.cn id=216 lang=javascript
 * @lcpr version=30203
 *
 * [216] 组合总和 III
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const res = []
  const path = []
  backTrack(0, 1)
  function backTrack(sum, start) {
    if (path.length === k) {
      if (sum === n) {
        res.push([...path])
      }
      return
    }
    for (let i = start; i <= 9; i++) {
      path.push(i)
      if (sum + i > n) {
        path.pop()
        break
      }
      backTrack(sum + i, i + 1)
      path.pop()
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// 3\n7\n
// @lcpr case=end

// @lcpr case=start
// 3\n9\n
// @lcpr case=end

// @lcpr case=start
// 4\n1\n
// @lcpr case=end

 */


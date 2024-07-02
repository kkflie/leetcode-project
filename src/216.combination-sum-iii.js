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
  function backTrack(n, k, sum, start) {
    if (path.length === k) {
      if (sum === n) {
        res.push([...path])
      }
      return
    }
    for (let i = start; i <= 9 + 1 - k + path.length; i++) {
      path.push(i)
      backTrack(n, k, sum + i, i + 1)
      path.pop()
    }
  }
  backTrack(n, k, 0, 1)
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


/*
 * @lc app=leetcode.cn id=77 lang=javascript
 * @lcpr version=30203
 *
 * [77] 组合
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = []
  const path = []
  backTrack(1)
  function backTrack(start) {
    if (path.length === k) {
      res.push([...path])
      return
    }
    for (let i = start; i <= n - (k - path.length) + 1; i++) {
      path.push(i)
      backTrack(i + 1)
      path.pop()
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// 4\n2\n
// @lcpr case=end

// @lcpr case=start
// 1\n1\n
// @lcpr case=end

 */


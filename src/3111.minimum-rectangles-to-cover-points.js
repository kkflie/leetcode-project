/*
 * @lc app=leetcode.cn id=3111 lang=javascript
 * @lcpr version=30204
 *
 * [3111] 覆盖所有点的最少矩形数目
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} w
 * @return {number}
 */
var minRectanglesToCoverPoints = function(points, w) {
  points.sort((a, b) => a[0] - b[0])
  const n = points.length
  let count = 1
  let pre = points[0][0]
  for (let i = 0; i < n; i++) {
    if (points[i][0] <= pre + w) {
      continue
    } else {
      count++
      pre = points[i][0]
    }
  }
  // console.log(points)
  return count
};
// @lc code=end



/*
// @lcpr case=start
// [[2,1],[1,0],[1,4],[1,8],[3,5],[4,6]]\n1\n
// @lcpr case=end

// @lcpr case=start
// [[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6]]\n2\n
// @lcpr case=end

// @lcpr case=start
// [[2,3],[1,2]]\n0\n
// @lcpr case=end

 */


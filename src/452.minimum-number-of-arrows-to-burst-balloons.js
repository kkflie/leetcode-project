/*
 * @lc app=leetcode.cn id=452 lang=javascript
 * @lcpr version=30204
 *
 * [452] 用最少数量的箭引爆气球
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  // review
  points.sort((a, b) => a[0] - b[0])
  const n = points.length
  if (!n) return 0
  let count = 1
  for (let i = 1; i < n; i++) {
    if (points[i][0] > points[i - 1][1]) {
      count++  
    } else {
      points[i][1] = Math.min(points[i - 1][1], points[i][1])
    }
  }
  return count
};
// @lc code=end



/*
// @lcpr case=start
// [[10,16],[2,8],[1,6],[7,12]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[3,4],[5,6],[7,8]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[2,3],[3,4],[4,5]]\n
// @lcpr case=end

 */


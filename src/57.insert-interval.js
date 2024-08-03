/*
 * @lc app=leetcode.cn id=57 lang=javascript
 * @lcpr version=30204
 *
 * [57] 插入区间
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  intervals.push(newInterval)
  intervals.sort((a, b) => a[0] - b[0])
  let [l, r] = intervals[0]
  const res = []
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= intervals[i-1][1]) {
      intervals[i][0] = intervals[i-1][0]
      intervals[i][1] = Math.max(intervals[i-1][1], intervals[i][1])
    } else {
      r = intervals[i - 1][1]
      res.push([l, r])
      l = intervals[i][0]
    }
  }
  res.push([l, intervals[intervals.length - 1][1]])
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [[1,3],[6,9]]\n[2,5]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[3,5],[6,7],[8,10],[12,16]]\n[4,8]\n
// @lcpr case=end

 */


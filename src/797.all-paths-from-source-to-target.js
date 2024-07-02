/*
 * @lc app=leetcode.cn id=797 lang=javascript
 * @lcpr version=30204
 *
 * [797] 所有可能的路径
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  // review
  const n = graph.length
  const res = []
  const path = []
  function dfs(start, end) {
    if (start === end) {
      res.push([...path])
      // console.log('path', path)
      return
    }
    for (let i = 1; i <= end; i++) {
      if (graph[start].indexOf(i) >= 0) {
        // console.log('edge', start, i)
        path.push(i)
        dfs(i, end)
        path.pop()
      }
    }
  }
  path.push(0)
  dfs(0, n - 1)
  // console.log(arr)
  // console.log(res)
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [[1,2],[3],[3],[]]\n
// @lcpr case=end

// @lcpr case=start
// [[4,3,1],[3,2,4],[3],[4],[]]\n
// @lcpr case=end

 */


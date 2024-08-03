/*
 * @lc app=leetcode.cn id=332 lang=javascript
 * @lcpr version=30203
 *
 * [332] 重新安排行程
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const path = ['JFK']
  const map = {}
  tickets.forEach((ticket) => {
    const [start, end] = ticket
    if (!map[start]) {
      map[start] = {}
    }
    map[start][end] = (map[start][end] || 0) + 1
  })
  Object.keys(map).forEach(start => {
    const destObj = map[start]
    const keys = Object.keys(destObj).sort((a, b) => a < b ? -1 : 1)
    const obj = {}
    keys.forEach((key) => {
      obj[key] = destObj[key]
    })
    map[start] = obj
  })
  backTrack()
  function backTrack() {
    if (path.length === tickets.length + 1) {
      return true
    }
    const start = path[path.length - 1]
    const destObj = map[start]
    if (!destObj) return false
    const destList = Object.keys(destObj)
    for (let i = 0; i < destList.length; i++) {
      const dest = destList[i]
      if (map[start][dest] < 1) {
        continue
      }
      path.push(dest)
      map[start][dest]--
      if (backTrack()) {
        return true
      }
      map[start][dest]++
      path.pop()
    }
  }
  return path
};
// @lc code=end



/*
// @lcpr case=start
// [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]\n
// @lcpr case=end

// @lcpr case=start
// [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]\n
// @lcpr case=end
// @lcpr case=start
// [["JFK","SFO"],["JFK","ATL"],["SFO","JFK"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"],["ATL","AAA"],["AAA","BBB"],["BBB","ATL"]]\n
// @lcpr case=end
 */


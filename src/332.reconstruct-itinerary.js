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
  let map = {}
  let res = []
  const path = ['JFK']
  tickets.forEach(([start, end]) => {
    if (!map[start]) {
      map[start] = {}
    }
    const value = map[start]
    value[end] = (value[end] || 0) + 1
    map[start] = value
  })
  // map = sortObj(map)
  // console.log(map)
  function backTrack(start) {
    if (path.length === tickets.length + 1) {
      res = path
      return true
    }
    const endList = Object.entries(map[start] || {}).filter((e) => e[1] > 0)
    // console.log(endList, start, endList.length)
    // if (endList.length < 1) {
    if (endList.length < 1) {
      return false
    }
      // console.log('end0', endList[0])
    endList.sort((a, b) => a[0] < b[0] ? -1 : 1)
    for (let i = 0; i < endList.length; i++) {
      // console.log('end0', endList[0])
      const end = endList[i]
      path.push(end[0])
      map[start][end[0]]--
      if (backTrack(end[0])) return true
      path.pop()
      map[start][end[0]]++
    }
    return false
  }
  // function sortObj(obj) {
  //   let newObj = {}
  //   const keys = Object.keys(obj)
  //   keys.sort((a, b) => a > b ? 1 : -1)
  //   keys.forEach((key) => {
  //     if (obj[key] !== null && typeof obj[key] === 'object') {
  //       newObj[key] = sortObj(obj[key])
  //     } else {
  //       newObj[key] = obj[key]
  //     }
  //   })
  //   return newObj
  // }
  backTrack('JFK')
  // console.log(res)
  return res
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


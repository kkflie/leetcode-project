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
  let dic = {}
  tickets.forEach((e) => {
    if (dic[e[0]] === undefined) {
      dic[e[0]] = { [e[1]]: 0 }
    }
    dic[e[0]][e[1]] = (dic[e[0]][e[1]] || 0) + 1
  })
  
  const res = ['JFK']
  function backTrack() {
    if (res.length >= tickets.length + 1) {
      return true
    }
    const target = dic[res[res.length - 1]]
    if (!target) {
      return false
    }
    const keys = Object.keys(target)
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      if (target[key] > 0) {
        target[key]--
        res.push(key)
        const flag = backTrack(dic)
        if (flag) {
          return true
        }
        target[key]++
        res.pop()
      }
    }
  }
  dic = sortObj(dic)
  backTrack(dic)
  return res
  function sortObj(obj) {
    let newObj = {}
    const keys = Object.keys(obj)
    keys.sort((a, b) => a > b ? 1 : -1)
    keys.forEach((key) => {
      if (obj[key] !== null && typeof obj[key] === 'object') {
        newObj[key] = sortObj(obj[key])
      } else {
        newObj[key] = obj[key]
      }
    })
    return newObj
  }
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


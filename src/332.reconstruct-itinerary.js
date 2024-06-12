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
  const res = []
  const path = []
  function backTrack(used) {
    if (path.length >= tickets.length) {
      const list = path.reduce((pre, arr, index) => {
        if (index === 0) {
          pre = pre.concat(arr)
        } else {
          pre.push(arr[1])
        }
        return pre
      }, [])
      res.push(list)
      return
    }
    for (let i = 0; i < tickets.length; i++) {
      const ticket = tickets[i]
      if (path.length === 0) {
        if (ticket[0] !== 'JFK') {
          continue
        } else {
          used[i] = true
          path.push(ticket)
          backTrack(used)
          used[i] = false
          path.pop()
        }
      } else {
        if (used[i] === true) {
          continue
        }
        const latestAirport = path[path.length - 1][1]
        const curAirport = ticket[0]
        if (latestAirport !== curAirport) {
          continue
        }
        used[i] = true
        path.push(ticket)
        backTrack(used)
        used[i] = false
        path.pop()
      }
    } 
  }
  backTrack(tickets.map(_ => false))
  console.log(res)
  res.sort((a, b) => {
    const flag = compareOrder(a, b)
    // console.log('flag', flag, a, b)
    return flag
  })
  console.log(res)
  return res[0]

  function compareOrder(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
        return 1
      } else if (a[i] < b[i]) {
        return -1
      } else {
        continue
      }
    }
    return -1
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

 */


/*
 * @lc app=leetcode.cn id=721 lang=javascript
 * @lcpr version=30204
 *
 * [721] 账户合并
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  const arr = merge(accounts)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 3) {
      continue
    }
    const arr2 = Array.from(new Set(arr[i].slice(1)))
    arr2.sort((a, b) => a < b ? -1 : 1)
    arr[i] = [arr[i][0], ...arr2]
  }
  return arr
  function getIdx(accounts, i) {
    while(typeof accounts[i][0] !== 'string') {
      i = accounts[i][0]
    }
    return i
  }
  function merge(accounts) {
    let map = {}
    let flag = true
    while(1) {
      flag = true
      for (let i = 0; i < accounts.length; i++) {
        for (let j = 1; j < accounts[i].length; j++) {
          const mail = accounts[i][j]
          if (map[mail] === undefined) {
            // 邮箱未被记录
            map[mail] = i
          } else {
            const idx = getIdx(accounts, map[mail])
            if (idx === i) continue
            flag = false
            accounts[idx] = [...accounts[idx], ...accounts[i].slice(1)]
            accounts[i] = [idx]
            break
          }
        }
      }
      if (flag) {
        break
      } else {
        accounts = accounts.filter((e) => typeof e[0] === 'string')
        map = {}
      }
    }
    return accounts
  }
};
// @lc code=end



/*
// @lcpr case=start
// [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John","johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]\n
// @lcpr case=end

// @lcpr case=start
// [["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]\n
// @lcpr case=end

 */


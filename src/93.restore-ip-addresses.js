/*
 * @lc app=leetcode.cn id=93 lang=javascript
 * @lcpr version=30203
 *
 * [93] 复原 IP 地址
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const res = []
  const path = []
  const n = s.length
  backTrack(0)
  return res
  function backTrack(start) {
    if (path.length === 4) {
      if (start === n) {
        res.push(path.join('.'))
      }
      return
    }
    for (let i = start; i < n; i++) {
      if (i - start > 2 || (path.length === 3 && start + i < n - 1)) {
        return
      }
      const num = s.slice(start, i + 1)
      if (
        num > 255 ||
        (
          num > 0 && num < 100 ||
          num - 0 === 0 && num.length > 1
        ) && num[0] === '0'
      ) {
        return
      }
      path.push(num)
      backTrack(i + 1)
      path.pop()
    }
  }
};
// @lc code=end



/*
// @lcpr case=start
// "25525511135"\n
// @lcpr case=end

// @lcpr case=start
// "0000"\n
// @lcpr case=end

// @lcpr case=start
// "101023"\n
// @lcpr case=end

 */


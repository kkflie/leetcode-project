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
  backTrack(0)
  function backTrack(start) {
    if (path.length >= 4) {
      res.push(path.join('.'))
      return
    }
    for (let i = start; i < s.length; i++) {
      if (i - start > 2) continue
      const num = s.slice(start, i + 1)
      if ((num[0] === '0' && num.length > 1) || num - 0 > 255) continue
      if (path.length === 3 && i < s.length - 1) {
        continue
      }
      path.push(s.slice(start, i + 1))
      backTrack(i + 1)
      path.pop()
    }
  }
  return res
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


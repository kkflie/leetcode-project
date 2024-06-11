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
  function backTrack(start) {
    if (path.length >= 4) {
      if (start >= s.length) {
        res.push(path.join('.'))
      }
      return
    }
    for (let i = start; i < s.length; i++) {
      const s1 = s.slice(start, i + 1)
      const num = s1 - 0
      if (num > 255 || (s1[0] === '0' && s1.length > 1)) {
        break
      } else {
        path.push(s1)
      }
      backTrack(i + 1)
      path.pop()
    }
  }
  backTrack(0)
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


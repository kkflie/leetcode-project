/*
 * @lc app=leetcode.cn id=76 lang=javascript
 * @lcpr version=30204
 *
 * [76] 最小覆盖子串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const sa = new Array(128).fill(0)
  const ta = new Array(128).fill(0)
  for (let i = 0; i < t.length; i++) {
    ta[t.charCodeAt(i)]++
  }
  let slow = 0
  let minLen = s.length + 1
  function check(sa, ta) {
    let flag = true
    for (let i = 0; i < ta.length; i++) {
      if (ta[i] === 0) continue
      if (ta[i] > sa[i]) return false
    }
    return flag
  }
  let start = 0, end = -1
  for (let i = 0; i < s.length; i++) {
    sa[s.charCodeAt(i)]++
    if (sa[s.charCodeAt(i)] < ta[s.charCodeAt(i)]) continue
    while (check(sa, ta)) {
      if (minLen > (i - slow + 1)) {
        minLen = i - slow + 1
        start = slow
        end = i
      }
      const idx = s[slow].charCodeAt(0)
      sa[idx]--
      slow++
      if (sa[idx] < ta[idx]) break
    }
  }
  if (start > end) return ''
  return s.substring(start, end + 1)
};
// @lc code=end



/*
// @lcpr case=start
// "ADOBECODEBANC"\n"ABC"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"a"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"aa"\n
// @lcpr case=end

 */


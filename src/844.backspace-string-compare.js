/*
 * @lc app=leetcode.cn id=844 lang=javascript
 * @lcpr version=30204
 *
 * [844] 比较含退格的字符串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  function getFinalString(s) {
    s = s.split('')
    const n = s.length
    let i = j = 0
    while (j < n) {
      if (s[j] !== '#') {
        s[i++] = s[j++] 
      } else {
        j++
        if (i > 0) i--
      }
    }
    return s.slice(0, i).join('')
  }
  const s2 = getFinalString(s)
  const t2 = getFinalString(t)
  return s2 === t2
};
// @lc code=end



/*
// @lcpr case=start
// "ab#c"\n"ad#c"\n
// @lcpr case=end

// @lcpr case=start
// "ab##"\n"c#d#"\n
// @lcpr case=end

// @lcpr case=start
// "a#c"\n"b"\n
// @lcpr case=end

 */


/*
 * @lc app=leetcode.cn id=28 lang=javascript
 * @lcpr version=30204
 *
 * [28] 找出字符串中第一个匹配项的下标
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // review
  const next = []
  getNext(next, needle)
  let j = -1
  for (let i = 0; i < haystack.length; i++) {
    while (j >= 0 && haystack[i] !== needle[j + 1]) {
      j = next[j]
    }
    if (haystack[i] === needle[j + 1]) {
      j++
    }
    if (j === needle.length - 1) {
      return i - needle.length + 1
    }
  }
  return -1
  function getNext(next, s) {
    let j = -1
    const n = s.length
    next[0] = j
    for (let i = 1; i < n; i++) {
      while(j >= 0 && s[i] !== s[j + 1]) {
        j = next[j]
      }
      if (s[i] === s[j + 1]) {
        j++
      }
      next[i] = j
    }
  }
};
// @lc code=end



/*
// @lcpr case=start
// "sadbutsad"\n"sad"\n
// @lcpr case=end

// @lcpr case=start
// "leetcode"\n"leeto"\n
// @lcpr case=end

 */


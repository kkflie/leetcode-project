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
  // review
  const ori = {}
  const cnt = {}
  let l = 0, r = -1, min = Number.MAX_SAFE_INTEGER
  let ansL = -1
  let ansR = -1
  
  for (let i = 0; i < t.length; i++) {
    if (!ori[t[i]]) {
      ori[t[i]] = 0
    }
    ori[t[i]]++
  }
  while (r < s.length) {
    r++
    if (ori[s[r]]) {
      if (!cnt[s[r]]) {
        cnt[s[r]] = 0
      }
      cnt[s[r]]++
    }
    while(check() && l <= r) {
      if (min > (r - l + 1)) {
        min = r - l + 1
        ansL = l
        ansR = r
      }
      if (cnt[s[l]]) {
        cnt[[s[l]]]--
      }
      l++
    }
  }

  if (ansL < 0) {
    return ''
  }
  return s.slice(ansL, ansR + 1)

  function check() {
    const keys = Object.keys(ori)
    for (let key of keys) {
      if (!cnt[key] || cnt[key] < ori[key]) {
        return false
      }
    }
    return true
  }
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


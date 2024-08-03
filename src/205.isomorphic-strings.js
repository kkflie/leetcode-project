/*
 * @lc app=leetcode.cn id=205 lang=javascript
 * @lcpr version=30204
 *
 * [205] 同构字符串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const map = {}
  const map2 = {}
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = t[i]
    } else if (map[s[i]] !== t[i]) {
      return false
    }
    if (!map2[t[i]]) {
      map2[t[i]] = s[i]
    } else if (map2[t[i]] !== s[i]) {
      return false
    }
  }
  return true
};
// @lc code=end



/*
// @lcpr case=start
// "egg"\n"add"\n
// @lcpr case=end

// @lcpr case=start
// "foo"\n"bar"\n
// @lcpr case=end

// @lcpr case=start
// "paper"\n"title"\n
// @lcpr case=end

 */


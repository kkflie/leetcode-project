/*
 * @lc app=leetcode.cn id=242 lang=javascript
 * @lcpr version=30204
 *
 * [242] 有效的字母异位词
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  const map = {}
  for (let i of s) {
    map[i] = (map[i] || 0) + 1
  }
  for (let i of t) {
    if (map[i]) {
      map[i]--
      continue
    }
    return false
  }
  return true
  // console.log(map)
};
// @lc code=end



/*
// @lcpr case=start
// "anagram"\n"nagaram"\n
// @lcpr case=end

// @lcpr case=start
// "rat"\n"car"\n
// @lcpr case=end

 */


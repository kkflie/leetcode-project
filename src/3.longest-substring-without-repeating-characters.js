/*
 * @lc app=leetcode.cn id=3 lang=javascript
 * @lcpr version=30204
 *
 * [3] 无重复字符的最长子串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let count = 0, maxCount = 0
  const n = s.length
  const arr = new Array(137).fill(0)
  let left = 0
  for (let i = 0; i < n; i++) {
    const c = s[i]
    const j = c.charCodeAt(0)
    if (arr[j] === 0) {
      arr[j]++
      count++
      maxCount = Math.max(maxCount, count)
    } else {
      while (left <= i && arr[j] > 0) {
        const j2 = s.charCodeAt(left)
        arr[j2]--
        left++
      }
      count = i - left + 1
      maxCount = Math.max(maxCount, count)
      arr[j]++
    }
  }
  return maxCount
};
// @lc code=end



/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

 */


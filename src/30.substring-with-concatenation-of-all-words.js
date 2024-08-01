/*
 * @lc app=leetcode.cn id=30 lang=javascript
 * @lcpr version=30204
 *
 * [30] 串联所有单词的子串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const n = words.length, n2 = words[0].length, n3 = n * n2, res = []
  const map = {}
  for (let i = 0; i < n; i++) {
    const word = words[i]
    if (!map[word]) {
      map[word] = {
        ori: 0,
        cur: 0,
      }
    }
    map[word].ori++
    map[word].cur++
  }
  for (let i = 0; i <= s.length - n3; i++) {
    let flag = false
    Object.keys(map).forEach((key) => {
      map[key].cur = map[key].ori
    })
    for (let j = i; j < i + n3; j+= n2) {
      const word = s.slice(j, j + n2)
      if (j - i < n3) {
        if (map[word] && map[word].cur > 0) {
          map[word].cur--
          continue
        } else {
          flag = true
          break
        }
      }
    }
    if (!flag) {
      res.push(i)
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// "barfoothefoobarman"\n["foo","bar"]\n
// @lcpr case=end

// @lcpr case=start
// "wordgoodgoodgoodbestword"\n["word","good","best","word"]\n
// @lcpr case=end

// @lcpr case=start
// "barfoofoobarthefoobarman"\n["bar","foo","the"]\n
// @lcpr case=end

 */


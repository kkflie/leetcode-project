/*
 * @lc app=leetcode.cn id=2506 lang=javascript
 * @lcpr version=30204
 *
 * [2506] 统计相似字符串对的数目
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
  const n = words.length
  const map = new Map()
  const acode = 'a'.charCodeAt(0)
  for (let i = 0; i < n; i++) {
    const word = words[i]
    const key = getKey(word)
    if (!map.has(key)) {
      map.set(key, [])
    }
    map.set(key, map.get(key).concat(word))
  }
  return map.values().reduce((pre, cur) => {
    if (cur.length > 1) {
      return pre + ((cur.length * (cur.length - 1)) >> 1)
    } 
    return pre
  }, 0)
  

  function getKey(word) {
    const arr = new Array(27).fill(0)
    word.split('').forEach((e) => {
      const idx = e.charCodeAt(0) - acode
      if (!arr[idx]) {
        arr[idx]++ 
      }
    })
    return arr.join('')
  }
};
// @lc code=end



/*
// @lcpr case=start
// ["aba","aabb","abcd","bac","aabc"]\n
// @lcpr case=end

// @lcpr case=start
// ["aabb","ab","ba"]\n
// @lcpr case=end

// @lcpr case=start
// ["nba","cba","dba"]\n
// @lcpr case=end

 */


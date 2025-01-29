/*
 * @lc app=leetcode.cn id=187 lang=javascript
 * @lcpr version=30204
 *
 * [187] 重复的DNA序列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  const res = []
  const map = new Map() 
  const dnaMap = new Map(
    [
      ['A', 0],
      ['C', 1],
      ['G', 2],
      ['T', 3],
    ]
  )
  let x = 0
  for (let i = 0; i < 9; i++) {
    x = x << 2
    x = x | dnaMap.get(s[i])
  }
  const reserved = (1 << 20) - 1
  for (let i = 0; i <= s.length - 10; i++) {
    x = x << 2
    x = x | dnaMap.get(s[i + 9])
    x = x & reserved
    map.set(x, (map.get(x) || 0) + 1)
    if (map.get(x) === 2) {
      res.push(s.slice(i, i + 10))
    }
  }
  // console.log(res[0] === res[1])
  return res
};
// @lc code=end


/*
// @lcpr case=start
// "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"\n
// @lcpr case=end

// @lcpr case=start
// "AAAAAAAAAAAAA"\n
// @lcpr case=end

 */


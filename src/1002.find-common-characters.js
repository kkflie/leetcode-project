/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 * @lcpr version=30204
 *
 * [1002] 查找共用字符
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  // review
  const hash = new Array(26).fill(0)
  const ahash = 'a'.charCodeAt()
  for (let i = 0; i < words[0].length; i++) {
    const c = words[0][i].charCodeAt()
    hash[c - ahash]++
  }
  // console.log(hash)
  const hashOther = new Array(26).fill(0)
  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      const c = words[i][j].charCodeAt()
      hashOther[c - ahash]++
    }
    for (let i = 0; i < 26; i++) {
      hash[i] = Math.min(hash[i], hashOther[i])
    }
    hashOther.fill(0)
  }
  let str = []
  for (let i = 0; i < 26; i++) {
    while(hash[i] > 0){
      str.push(String.fromCharCode(ahash+i))
      hash[i]--
    }
  }
  // console.log(str)
  return str
};
// @lc code=end



/*
// @lcpr case=start
// ["bella","label","roller"]\n
// @lcpr case=end

// @lcpr case=start
// ["cool","lock","cook"]\n
// @lcpr case=end

 */


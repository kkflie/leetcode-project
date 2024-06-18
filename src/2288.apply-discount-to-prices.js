/*
 * @lc app=leetcode.cn id=2288 lang=javascript
 * @lcpr version=30204
 *
 * [2288] 价格减免
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function(sentence, discount) {
  let i = 0
  let j = 0
  const arr = ['1','2','3','4','5','6','7','8','9','0','.']
  while (j < sentence.length) {
    if (sentence[j] === '$' && isNumber(sentence[j + 1])) {
      if (j > 0 && sentence[j - 1] !== ' ') {
        j++
        continue
      }
      j++
      i = j
      while (isNumber(sentence[j]) && j < sentence.length) {
        j++
      }
      if (j < sentence.length && sentence[j] !== ' ') {
        continue
      }
      const res = calc(sentence.slice(i, j), discount)
      sentence = sentence.slice(0, i) + res + sentence.slice(j)
      j = i + res.length
    } else {
      j++
    }
  }
  return sentence

  function isNumber(c) {
    return arr.indexOf(c) > -1
  }

  function calc(str, discount) {
    const num = str - 0
    return (num * ((100 - discount) / 100)).toFixed(2)
  }
};
// @lc code=end



/*
// @lcpr case=start
// "there are $1 $2 and 5$ candies in the shop"\n50\n
// @lcpr case=end

// @lcpr case=start
// "1 2 $3 4 $5 $6 7 8$ $9 $10$"\n100\n
// @lcpr case=end

 */


/*
 * @lc app=leetcode.cn id=13 lang=javascript
 * @lcpr version=30201
 *
 * [13] 罗马数字转整数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const dic = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  500: 'D',
  1000: 'M',
}
var romanToInt = function(s) {
  if (s < 11 || dic[s]) {
    return dic[s]
  }
  let res = ''
  if (s < 40) {
    res += 'X' + dic[s % 10]
    s = Math.floor(s / 10)
  }
  if (40 < s && s < 50) {
    const sub = s % 10
    return  'XL' + dic[sub]
  }
  if (50 <= s && s < 90) {
    res += 'L'
    s -= 50
    res += romanToInt(s)
  }
  if (90 < s && s < 100) {
    res += 'XC'
    s -= 90
    res += romanToInt(s)
  }
  return res
};
module.exports = romanToInt
// @lc code=end



/*
// @lcpr case=start
// "III"\n
// @lcpr case=end

// @lcpr case=start
// "IV"\n
// @lcpr case=end

// @lcpr case=start
// "IX"\n
// @lcpr case=end

// @lcpr case=start
// "LVIII"\n
// @lcpr case=end

// @lcpr case=start
// "MCMXCIV"\n
// @lcpr case=end

 */


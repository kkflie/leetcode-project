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
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
  V: 5,
  VI: 6,
  VII: 7,
  VIII: 8,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
}
var romanToInt = function(s0) {
  let s = s0
  if (!s || !s.length) {
    return 0
  }
  if (dic[s]) {
    return dic[s]
  }
  let res = 0
  let i = s.length - 1
  while (i >= 0) {
    const n = dic[s[i]]
    if (i === s.length -1) {
      res += n
    } else {
      const n2 = dic[s[i + 1]]
      if (n < n2) {
        res -= n
      } else {
        res += n
      }
    }
    i--
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


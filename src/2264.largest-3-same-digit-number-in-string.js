/*
 * @lc app=leetcode.cn id=2264 lang=javascript
 * @lcpr version=30204
 *
 * [2264] 字符串中最大的 3 位相同数字
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
  let res = ''
  for (let i = 0; i < num.length; i++) {
    if (i > 0 && num[i] === num[i - 1]) continue
    let flag = true
    for (let j = i + 1; j < i + 3; j++) {
      if (num[j] !== num[i]) {
        flag = false
        break
      }
    }
    if (flag) {
      const curNum = num.slice(i, i + 3)
      res = res > curNum ? res : curNum
      i = i + 1
    }
  } 
  return res
};
// @lc code=end



/*
// @lcpr case=start
// "6777133339"\n
// @lcpr case=end

// @lcpr case=start
// "2300019"\n
// @lcpr case=end

// @lcpr case=start
// "42352338"\n
// @lcpr case=end

 */


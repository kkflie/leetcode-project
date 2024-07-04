/*
 * @lc app=leetcode.cn id=860 lang=javascript
 * @lcpr version=30204
 *
 * [860] 柠檬水找零
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  if (bills[0] > 5) return false
  let coin5 = 0, coin10 = 0
  for (let i = 0; i < bills.length; i++) {
    let coin = bills[i]
    switch (coin) {
      case 10: 
        coin10++
        break
      case 5: 
        coin5++
        break
    }
    if (coin === 5) continue
    while (coin > 5) {
      while (coin > 10 && coin10 > 0) {
        coin -= 10
        coin10--
      }
      while (coin > 5 && coin5 > 0) {
        coin -= 5
        coin5--
      }
      if (coin > 5) {
        return false
      }
    }
  }
  return true
};
// @lc code=end



/*
// @lcpr case=start
// [5,5,5,10,20]\n
// @lcpr case=end

// @lcpr case=start
// [5,5,10,10,20]\n
// @lcpr case=end

 */


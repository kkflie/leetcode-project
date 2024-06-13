/*
 * @lc app=leetcode.cn id=2806 lang=javascript
 * @lcpr version=30203
 *
 * [2806] 取整购买后的账户余额
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function(purchaseAmount) {
  const n2 = purchaseAmount % 10
  if (n2 >=5) {
    return 100 - purchaseAmount - 10 + n2
  }
  const n1 = Math.floor(purchaseAmount / 10)
  return 100 - n1 * 10
};
// @lc code=end



/*
// @lcpr case=start
// 9\n
// @lcpr case=end

// @lcpr case=start
// 15\n
// @lcpr case=end

 */


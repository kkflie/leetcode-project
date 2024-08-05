/*
 * @lc app=leetcode.cn id=600 lang=javascript
 * @lcpr version=30204
 *
 * [600] 不含连续1的非负整数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findIntegers = function(n) {
  // review
  // const n = 990
    const dp = new Array(31).fill(0);
    dp[0] = dp[1] = 1;
    for (let i = 2; i < 31; ++i) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    let pre = 0, res = 0;
    for (let i = 29; i >= 0; --i) {
        let val = 1 << i;
        if ((n & val) !== 0) {
          console.log('val', pre, i, dp[i + 1], val)
            res += dp[i + 1];
            // return res
            if (pre === 1) {
                break;
            }
            console.log('pre')
            pre = 1;
        } else {
          console.log('val2', val, n, n & val)
            pre = 0;
        }

        if (i === 0) {
          console.log('val3', val)
            ++res;
        }
    }

    return res;
};
// @lc code=end



/*
// @lcpr case=start
// 5\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

// @lcpr case=start
// 2\n
// @lcpr case=end

 */


/*
 * @lc app=leetcode.cn id=2748 lang=javascript
 * @lcpr version=30204
 *
 * [2748] 美丽下标对的数目
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function(nums) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (isBeautiful(nums[i], nums[j])) {
        res++
      }
    }
  }
  function isBeautiful(a, b) {
    const m = a < 10 ? a : `${a}`[0] - 0
    const s = b + ''
    const n = b < 10 ? b : s[s.length - 1] - 0
    if (m === 1 || n === 1) {
      return true
    }
    for (let i = 2; i < 10; i++) {
      if (m % i === 0 && n % i === 0) {
        return false
      }
    }
    return true
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [2,5,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [11,21,12]\n
// @lcpr case=end

 */


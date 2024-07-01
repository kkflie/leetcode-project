/*
 * @lc app=leetcode.cn id=583 lang=javascript
 * @lcpr version=30204
 *
 * [583] 两个字符串的删除操作
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
   // review
   const nums1 = word1.split('')
   const nums2 = word2.split('')
   const len1 = nums1.length
   const len2 = nums2.length
   const dp = new Array(len1 + 1).fill(undefined).map(() => new Array(len2 + 1).fill(0))
   for (let i = 1; i <= len1; i++) {
     for (let j = 1; j <= len2; j++) {
       if (nums1[i - 1] === nums2[j - 1]) {
         dp[i][j] = dp[i - 1][j - 1] + 1
       } else {
         dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
       }
     }
   }
   const max = dp[len1][len2]
   return word2.length + word1.length - 2 * max 
};
// @lc code=end



/*
// @lcpr case=start
// "sea"\n"eat"\n
// @lcpr case=end

// @lcpr case=start
// "leetcode"\n"etco"\n
// @lcpr case=end

 */


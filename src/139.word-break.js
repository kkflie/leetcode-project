/*
 * @lc app=leetcode.cn id=139 lang=javascript
 * @lcpr version=30204
 *
 * [139] 单词拆分
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  // review
  const dp = new Array(s.length + 1).fill(false)
  dp[0] = true
  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      const word = wordDict[j]
      if (i >= word.length) {
        if (s.slice(i - word.length, i) === word && dp[i - word.length]) {
          dp[i] = true
        }
      }
    }
  }
  // console.log(wordDict)
  return dp[s.length]
};
// @lc code=end



/*
// @lcpr case=start
// "leetcode"\n["leet", "code"]\n
// @lcpr case=end

// @lcpr case=start
// "applepenapple"\n["apple", "pen"]\n
// @lcpr case=end

// @lcpr case=start
// "catsandog"\n["cats", "dog", "sand", "and", "cat"]\n
// @lcpr case=end

 */


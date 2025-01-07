/*
 * @lc app=leetcode.cn id=28 lang=javascript
 * @lcpr version=30204
 *
 * [28] 找出字符串中第一个匹配项的下标
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let pre = 0,
    after = 0;
  while (after < needle.length && pre < haystack.length) {
    // pre代表需要从哪里开始比较
    if (haystack[after + pre] === needle[after]) {
      after++;
    } else {
    // 如果发现不想等应该剔除掉haystack之前的字符
      pre++;
    // 不相等剔除后，重新开始便利after
      after = 0;
    }
  }
  return after === needle.length ? pre : -1;
};
// @lc code=end

// console.log(strStr('babbbbbabb', 'bbab'))

// strStr('sadbutsad', 'abababca')



/*
// @lcpr case=start
// "sadbutsad"\n"sad"\n
// @lcpr case=end

// @lcpr case=start
// "leetcode"\n"leeto"\n
// @lcpr case=end

 */


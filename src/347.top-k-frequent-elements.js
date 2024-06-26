/*
 * @lc app=leetcode.cn id=347 lang=javascript
 * @lcpr version=30204
 *
 * [347] 前 K 个高频元素
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const dic = {}
  nums.forEach((e) => {
    if (!dic[e]) {
      dic[e] = 0
    }
    dic[e]++
  })
  const arr = Object.entries(dic).sort((a, b) => b[1] - a[1]).slice(0, k)
    .map((e) => e[0])
  return arr
};
// @lc code=end



/*
// @lcpr case=start
// [1,1,1,2,2,3]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

 */


/*
 * @lc app=leetcode.cn id=49 lang=javascript
 * @lcpr version=30204
 *
 * [49] 字母异位词分组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map2 = {}
  strs.forEach((e) => {
    const key = e.split('').sort().join('')
    if (!map2[key]) {
      map2[key] = []
    }
    map2[key].push(e)
  })
  return Object.values(map2)
};
// @lc code=end



/*
// @lcpr case=start
// ["eat", "tea", "tan", "ate", "nat", "bat"]\n
// @lcpr case=end

// @lcpr case=start
// [""]\n
// @lcpr case=end

// @lcpr case=start
// ["a"]\n
// @lcpr case=end

 */


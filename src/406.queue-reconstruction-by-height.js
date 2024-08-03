/*
 * @lc app=leetcode.cn id=406 lang=javascript
 * @lcpr version=30204
 *
 * [406] 根据身高重建队列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  // review
  people.sort((a, b) => {
    if (b[0] === a[0]) {
      return a[1] - b[1]
    }
    return b[0] - a[0]
  })
  const res = [people[0]]
  for (let i = 1; i < people.length; i++) {
    res.splice(people[i][1], 0, people[i])
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]\n
// @lcpr case=end

// @lcpr case=start
// [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]\n
// @lcpr case=end

 */


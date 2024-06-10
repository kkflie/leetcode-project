/*
 * @lc app=leetcode.cn id=40 lang=javascript
 * @lcpr version=30203
 *
 * [40] 组合总和 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const res = []
  const path = []
  candidates.sort((a, b) => a - b)
  function notExistRes(path) {
    const len = path.length
    for (let i = 0; i < res.length; i++) {
      if (res[i].length !== len) {
        continue
      }
      let flag = true
      for (let j = 0; j < res[i].length; j++) {
        if (res[i][j] !== path[j]) {
          flag = false
          break
        }
      }
      if (flag) {
        return false
      }
    }
    return true
  }
  function backTrack(start, sum) {
    if (sum > target) {
      return
    }
    if (sum === target) {
      const flag = notExistRes(path)
      if (flag) {
        res.push([...path])
      }
      return
    }
    for (let i = start; i < candidates.length; i++) {
      const num = candidates[i]
      path.push(num)
      sum += num
      backTrack(i + 1, sum)
      sum -= path.pop()
    }
  }
  backTrack(0, 0)
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [10,1,2,7,6,1,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2,5,2,1,2]\n5\n
// @lcpr case=end

 */


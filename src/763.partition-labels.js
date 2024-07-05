/*
 * @lc app=leetcode.cn id=763 lang=javascript
 * @lcpr version=30204
 *
 * [763] 划分字母区间
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  const n = s.length
  const map = new Map()
  for (let i = 0; i < n; i++) {
    const c = s[i]
    if (!map.has(c)) {
      map.set(c, [i, s.lastIndexOf(c)])
    }
  }
  const arr = Array.from(map.values()).sort((a, b) => a[0] - b[0])
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] < arr[i - 1][1]) {
      arr[i][1] = Math.max(arr[i - 1][1], arr[i][1])
      arr[i][0] = arr[i - 1][0]
    }
  }
  const map2 = {}
  for (let i = 0; i < arr.length; i++) {
    if (!map2[arr[i][0]]) {
      map2[arr[i][0]] = arr[i][1]
    } else {
      map2[arr[i][0]] = Math.max(map2[arr[i][0]], arr[i][1])
    }
  }
  const arr2 = Object.entries(map2).reduce((pre, cur) => {
    pre.push(cur[1] - cur[0] + 1)
    return pre
  }, [])
  return arr2
};
// @lc code=end



/*
// @lcpr case=start
// "ababcbacadefegdehijhklij"\n
// @lcpr case=end

// @lcpr case=start
// "eccbbbbdec"\n
// @lcpr case=end

 */


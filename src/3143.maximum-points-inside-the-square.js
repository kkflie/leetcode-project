/*
 * @lc app=leetcode.cn id=3143 lang=javascript
 * @lcpr version=30204
 *
 * [3143] 正方形中的最多点数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} points
 * @param {string} s
 * @return {number}
 */
var maxPointsInsideSquare = function(points, s) {
  // review
  const min1 = new Array(26).fill(1000000001);
    let min2 = 1000000001;
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        const [x, y] = points[i];
        const j = s.charCodeAt(i) - 'a'.charCodeAt(0);
        const d = Math.max(Math.abs(x), Math.abs(y));
        if (d < min1[j]) {
          console.log('min2', min2, min1[j], s[i])
            min2 = Math.min(min2, min1[j]);
            min1[j] = d;
        } else if (d < min2) {
          console.log('min3',s[i], d, min2)
            min2 = d;
        }
    }
    let res = 0;
    // console.log('min1', min1)
    // console.log(min2)
    for (const d of min1) {
        if (d < min2) {
            ++res;
        }
    }
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// [[2,2],[-1,-2],[-4,4],[-3,1],[3,-3]]\n"abdca"\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[-2,-2],[-2,2]]\n"abb"\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[-1,-1],[2,-2]]\n"ccd"\n
// @lcpr case=end

 */


/*
 * @lc app=leetcode.cn id=51 lang=javascript
 * @lcpr version=30204
 *
 * [51] N 皇后
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const res = []
  const board = new Array(n).fill(0)
  backTrack(0, 0)
  return res
  function backTrack(x, sum) {
    if (x === n) {
      res.push(visibleBoard(board))
      return
    }
    for (let i = x; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i + 1 === n && sum + 1 < n) {
          return
        }
        if (!isSafe(board, i, j)) continue
        board[i] = 1 << (n - 1 - j)
        backTrack(i + 1, sum + 1)
        board[i] = 0
      }
    }
  }
  function isSafe(board, x, y) {
    // 横向搜索
    for (let j = 0; j < n; j++) {
      if (board[x] === 1 << (n - 1 - j)) return false
    }
    // 纵向搜索
    for (let i = Math.max(x - 1, 0); i >= 0; i--) {
      if (board[i] === 1 << (n - 1 - y)) return false
    }
    // 左上-右上
    for (let i = x; i >= 0; i--) {
      const offset = x - i
      let j = y - offset
      if (j >= 0 && board[i] === 1 << (n - 1 - j)) return false
      j = y + offset
      if (j < n && board[i] === 1 << (n - 1 - j)) return false
    }
    return true
  }
  function visibleBoard(board) {
    const arr = []
    board.forEach(e => {
      const arr2 = new Array(n).fill('.')
      if (e === 0) {
        arr.push(arr2)
      } else {
        const idx = n - 1 - getIdx(e)
        arr2[idx] = 'Q'
        arr.push(arr2.join(''))
      }
    })
    return arr
  }
  function getIdx(num) {
    let count = 0
    while(num > 1) {
      num = num >> 1
      count++
    }
    return count
  }
};
// @lc code=end



/*
// @lcpr case=start
// 4\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */


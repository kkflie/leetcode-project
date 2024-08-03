/*
 * @lc app=leetcode.cn id=37 lang=javascript
 * @lcpr version=30204
 *
 * [37] 解数独
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const n = board.length
  backTrack()
  function backTrack() {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] !== '.') continue
        for (let k = 1; k <= 9; k++) {
          if (isValid(board, i, j, k + '')) {
            board[i][j] = k + ''
            if (backTrack()) {
              return true
            }
            board[i][j] = '.'
          }
        }
        // console.log(i, j)
        return false
      }
    }
    return true
  }
  function isValid(board, x, y, num) {
    // 横向搜索
    for (let j = 0; j < n; j++) {
      if (board[x][j] === num) return false
    }
    // 纵向搜索
    for (let i = 0; i < n; i++) {
      if (board[i][y] === num) return false
    }
    const startX = Math.floor(x / 3) * 3, startY = Math.floor(y / 3) * 3
    for (let i = startX; i < startX + 3; i++) {
      for (let j = startY; j < startY + 3; j++) {
        if (board[i][j] === num) {
          return false
        }
      }
    }
    return true
  }
};
// @lc code=end



/*
// @lcpr case=start
// [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]\n
// @lcpr case=end

 */


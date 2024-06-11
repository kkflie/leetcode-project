/*
 * @lc app=leetcode.cn id=419 lang=javascript
 * @lcpr version=30203
 *
 * [419] 甲板上的战舰
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  let num = 0
  if (board.length < 1) {
    return 0
  }
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'X') {
        computeX(i, j)
      }
    }
  }

  return num
  
  function computeX(y, x) {
    if (board[y][x] === true) {
      return
    }
    
    for (let j = x + 1; j < board[y].length; j++) {
      if (board[y][j] !== 'X') {
        break
      } else {
        board[y][j] = true
      }
    }

    for (let i = y + 1; i < board.length; i++) {
      if (board[i][x] !== 'X') {
        break
      } else {
        board[i][x] = true
      }
    }
    num++
  }
};
// @lc code=end



/*
// @lcpr case=start
// [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]\n
// @lcpr case=end

// @lcpr case=start
// [["."]]\n
// @lcpr case=end

 */


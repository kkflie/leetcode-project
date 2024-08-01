/*
 * @lc app=leetcode.cn id=LCP 40 lang=javascript
 * @lcpr version=30204
 *
 * [LCP 40] 心算挑战
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} cards
 * @param {number} cnt
 * @return {number}
 */
var maxmiumScore = function(cards, cnt) {
  // review
  cards.sort((a, b) => b - a)
  const n = cards.length
  let sum = 0, max = 0, odd = -1, even = -1
  for (let i = 0; i < cnt; i++) {
    sum += cards[i]
    if (cards[i] & 1) {
      odd = cards[i]
    } else {
      even = cards[i]
    }
  }
  if ((sum % 2) === 0) {
    return sum
  }
  for (let i = cnt; i < n; i++) {
    const card = cards[i]
    if (card % 2 === 1) {
      if (even !== -1) {
        max = Math.max(max, sum - even + card)
      }
    } else {
      if (odd !== -1) [
        max = Math.max(max, sum - odd + card)
      ]
    }
  }
  return max
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,8,9]\n3`>\n
// @lcpr case=end

// @lcpr case=start
// [3,3,1]\n1`>\n
// @lcpr case=end

 */

// 
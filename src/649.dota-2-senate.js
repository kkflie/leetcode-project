/*
 * @lc app=leetcode.cn id=649 lang=javascript
 * @lcpr version=30204
 *
 * [649] Dota2 参议院
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
  // review
  const n = senate.length
  const radiant = []
  const dire = []
  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') {
      radiant.push(i)
    } else {
      dire.push(i)
    }
  }

  while(radiant.length && dire.length) {
    if (radiant[0] < dire[0]) {
      radiant.push(radiant[0] + n)
    } else {
      dire.push(dire[0] + n)
    }
    radiant.shift()
    dire.shift()
  }
  return !radiant.length ? 'Dire' : 'Radiant'
};
// @lc code=end



/*
// @lcpr case=start
// "RD"\n
// @lcpr case=end

// @lcpr case=start
// "RDD"\n
// @lcpr case=end

 */


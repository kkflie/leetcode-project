/*
 * @lc app=leetcode.cn id=925 lang=javascript
 * @lcpr version=30204
 *
 * [925] 长按键入
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  if (name.length > typed.length) return false
  let i = 0, j = 0
  while(i < name.length && j < typed.length) {
    if (name[i] === typed[j]) {
      if (j > 0 && typed[j-1] !==name[i-1]){
        return false
      }
      i++
      j++
    } else if (j > 0 && typed[j] !== name[i - 1]) {
      return false
    } 
    else {
      j++
    }
  }
  while(j < typed.length) {
    if (typed[j - 1] !== typed[j]) {
      return false
    } else {
      j++
    }
  }
  return i >= name.length
};
// @lc code=end



/*
// @lcpr case=start
// "alex"\n"aaleex"\n
// @lcpr case=end

// @lcpr case=start
// "saeed"\n"ssaaedd"\n
// @lcpr case=end

 */


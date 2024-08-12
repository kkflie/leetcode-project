/*
 * @lc app=leetcode.cn id=676 lang=javascript
 * @lcpr version=30204
 *
 * [676] 实现一个魔法字典
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

var MagicDictionary = function() {
  this.list = []
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
  this.list = dictionary.slice()
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
  if (!this.list.length) {
    return false
  }
  for (let word of this.list) {
    if (word.length !== searchWord.length) {
      continue
    }
    let diff = 0
    for (let i in word) {
      if (word[i] !== searchWord[i]) {
        diff++
      }
      if (diff > 1) {
        break
      }
    }
    if (diff === 1) {
      return true
    }
  }
  return false
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
// @lc code=end




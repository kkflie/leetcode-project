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
  this.root = new Trie();
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
  for (const word of dictionary) {
    let cur = this.root
    for (let i in word) {
      const idx = word.charCodeAt(i) - 'a'.charCodeAt(0)
      if (!cur.child[idx]) {
        cur.child[idx] = new Trie()
      }
      cur = cur.child[idx]
    }
    cur.isFinished = true
  }
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
  return dfs(searchWord, this.root, 0, false);
};

const dfs = (searchWord, node, pos, modified) => {
  if (pos === searchWord.length) {
    return node.isFinished && modified
  }

  const idx = searchWord.charCodeAt(pos) - 'a'.charCodeAt(0)
  if (node.child[idx]) {
    if (dfs(searchWord, node.child[idx], pos + 1, modified)) {
      return true
    }
  }

  if (!modified) {
    for (let i = 0; i < 26; i++) {
      if (i === idx || !node.child[i]) {
        continue
      }
      if (dfs(searchWord, node.child[i], pos + 1, true)) {
        return true
      }
    } 
  }
  return false
}

class Trie {
  constructor() {
      this.isFinished = false;
      this.child = new Array(26).fill(0);
  }
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
// @lc code=end




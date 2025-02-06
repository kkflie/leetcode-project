/*
 * @lc app=leetcode.cn id=380 lang=javascript
 * @lcpr version=30204
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

var RandomizedSet = function() {
  this.arr = []
  this.map = new Map()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map.has(val)) return false
  this.arr.push(val)
  this.map.set(val, this.arr.length - 1)
  return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.map.has(val)) {
    return false
  }
  const i = this.map.get(val)
  this.arr[i] = this.arr[this.arr.length - 1]
  this.map.set(this.arr[i], i)
  this.arr.pop()
  this.map.delete(val)
  return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const i = Math.floor(Math.random() * this.arr.length)
  return this.arr[i]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end




/*
 * @lc app=leetcode.cn id=707 lang=javascript
 * @lcpr version=30204
 *
 * [707] 设计链表
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

function ListNode(val, next) {
  this.val = val
  this.next = next
}
var MyLinkedList = function() {
  this.size = 0
  this.head = null
  this.tail = null
};

/**
 * 
 * @param {number} index 
 * @return {ListNode}
 */
MyLinkedList.prototype.getNode = function(index) {
  if (index <0 || index >= this.size) return null
  let cur = new ListNode(0, this.head)
  while (index-- >= 0) {
    cur = cur.next
  }
  return cur
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.size) return -1
  const node = this.getNode(index)
  if (!node) return -1
  return node.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const node = new ListNode(val)
  if (this.size < 1) {
    this.head = node
    this.tail = node
    this.size++
    return
  }
  this.size++
  node.next = this.head
  this.head = node
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const node = new ListNode(val)
  if (this.size < 1) {
    this.head = node
    this.tail = node
    this.size++
    return
  }
  this.size++
  this.tail.next = node
  this.tail = node
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.size) return
  if (index <= 0) {
    this.addAtHead(val)
    return
  } else if (index === this.size) {
    this.addAtTail(val)
    return
  }
  this.size++
  const pre= this.getNode(index - 1) 
  const node = new ListNode(val, pre.next)
  pre.next = node
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.size) return
  if (index === 0) {
    this.head = this.head.next 
    if (this.size < 2) {
      this.tail = null
    }
    this.size--
    return
  } else if (index === this.size - 1) {
    if (this.size < 2) {
      this.head = null
      this.tail = null
      this.size--
      return
    }
    const pre = this.getNode(index - 1)
    this.tail = pre
    this.size--
    return
  }
  const pre = this.getNode(index - 1) 
  pre.next = pre.next.next
  this.size--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end




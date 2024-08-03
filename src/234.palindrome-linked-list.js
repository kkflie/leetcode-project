/*
 * @lc app=leetcode.cn id=234 lang=javascript
 * @lcpr version=30204
 *
 * [234] 回文链表
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  //review
  let slow = head, fast = head
  let pre = slow
  while (fast) {
    pre = slow
    slow = slow.next
    if (!fast.next) {
      break
    }
    fast = fast.next
    if (fast.next) {
      fast = fast.next
    } else {
      break
    }
  }
  slow = reverse(slow)
  pre.next = null
  // traverse(slow)
  while (slow && head) {
    if (slow.val !== head.val) {
      return false
    }
    slow = slow.next
    head = head.next
  }
  return true
  function traverse(root) {
    while(root) {
      root = root.next
    }
  }
  function reverse(head) {
    let cur = head
    let pre = null
    while (cur) {
      let temp = cur.next
      cur.next = pre
      pre = cur 
      cur = temp
    }
    return pre
  }
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */


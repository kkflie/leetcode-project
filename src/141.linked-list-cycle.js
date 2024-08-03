/*
 * @lc app=leetcode.cn id=141 lang=javascript
 * @lcpr version=30204
 *
 * [141] 环形链表
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head)return false
  let slow = head, fast = head.next
  while(true) {
    if (!slow||!fast) {return false}
    if (slow === fast) {
      return true
    }
    slow = slow.next
    if (fast.next) {
      fast = fast.next
    }
    if (fast.next) {
      fast = fast.next
    } else {
      return false
    }
  }  
};
// @lc code=end



/*
// @lcpr case=start
// [3,2,0,-4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [1]\n-1\n
// @lcpr case=end

 */


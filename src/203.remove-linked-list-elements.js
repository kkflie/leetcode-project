/*
 * @lc app=leetcode.cn id=203 lang=javascript
 * @lcpr version=30204
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) return head
  let dummyHead = new ListNode(undefined, head), pre = dummyHead
  while (head) {
    if (head.val === val) {
      pre.next = head.next
      head = head.next
    } else {
      pre = head
      head = head.next
    }
  }
  return dummyHead.next
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,6,3,4,5,6]\n6\n
// @lcpr case=end

// @lcpr case=start
// []\n1\n
// @lcpr case=end

// @lcpr case=start
// [7,7,7,7]\n7\n
// @lcpr case=end

 */


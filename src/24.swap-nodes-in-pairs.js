/*
 * @lc app=leetcode.cn id=24 lang=javascript
 * @lcpr version=30203
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) return head
  let cur = head, cur2 = head.next, dummyHead = new ListNode(undefined, head), pre = dummyHead
  while (cur && cur.next) {
    cur2 = cur.next
    const cur3 = cur2.next
    cur.next = cur3
    cur2.next = cur
    pre.next = cur2
    pre = cur
    cur = cur.next
    // if (cur) cur2 = cur.next
  }
  // console.log(dummyHead)
  return dummyHead.next
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */


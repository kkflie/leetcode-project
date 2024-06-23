/*
 * @lc app=leetcode.cn id=160 lang=javascript
 * @lcpr version=30204
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let lenA = getLen(headA)
  let lenB = getLen(headB)
  if (lenA > lenB) {
    let temp = headB
    headB = headA
    headA = temp
    temp = lenB
    lenB = lenA
    lenA = temp
  }
  // A < B
  let gap = lenB - lenA
  while(gap--) {
    headB = headB.next
  }
  while(headB) {
    if (headA === headB) {
      return headB
    }
    headB = headB.next
    headA = headA.next
  }
  return null
  function getLen(head) {
    let len = 0
    while (head) {
      len++
      head = head.next
    }
    return len
  }
};
// @lc code=end



/*
// @lcpr case=start
// 8\n[4,1,8,4,5]\n[5,6,1,8,4,5]\n2\n3\n
// @lcpr case=end

// @lcpr case=start
// 2\n[1,9,1,2,4]\n[3,2,4]\n3\n1\n
// @lcpr case=end

// @lcpr case=start
// 0\n[2,6,4]\n[1,5]\n3\n2\n
// @lcpr case=end

 */


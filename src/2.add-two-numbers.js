/*
 * @lc app=leetcode.cn id=2 lang=javascript
 * @lcpr version=30204
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let p = l1, q = l2, pre, k = 0
  while (p && q) {
    p.val = p.val + q.val + k
    if (p.val >= 10) {
      k = 1
      p.val -= 10
    } else {
      k = 0
    }
    pre = p
    p = p.next
    q = q.next
  }
  if (p && !k) {
    return l1
  } else if (q) {
    pre.next = q
    p = q
  }
  while(p) {
    p.val += k
    if (p.val >= 10) {
      k = 1
      p.val -= 10
    } else {
      k = 0
    }
    pre = p
    p = p.next
  }
  if (k) {
    pre.next = new ListNode(1)
  }
  return l1
};
// @lc code=end



/*
// @lcpr case=start
// [2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n[0]\n
// @lcpr case=end

// @lcpr case=start
// [9,9,9,9,9,9,9]\n[9,9,9,9]\n
// @lcpr case=end

 */


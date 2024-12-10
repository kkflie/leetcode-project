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
  let needPlusFlag = 0
  let head = l1
  let pre1 = l1

  while (l1 && l2) {
    l1.val = l1.val + l2.val + needPlusFlag
    if (l1.val >= 10) {
      needPlusFlag = 1
      l1.val -= 10
    } else {
      needPlusFlag = 0
    }
    pre1 = l1
    l1 = l1.next
    l2 = l2.next
  }

  if (l2) {
    pre1.next = l2
    l1 = l2
  }

  while (l1) {
    l1.val += needPlusFlag
    if (l1.val >= 10) {
      needPlusFlag = 1
      l1.val -= 10
    } else {
      needPlusFlag = 0
    }
    pre1 = l1
    l1 = l1.next
  }

  if (needPlusFlag) {
    pre1.next = new ListNode(needPlusFlag, null)
  }


  return head
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


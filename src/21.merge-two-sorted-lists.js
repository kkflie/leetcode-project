/*
 * @lc app=leetcode.cn id=21 lang=javascript
 * @lcpr version=30201
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if (!list1) {
    return list2
  }
  if (!list2) {
    return list1
  }
  let res = null
  let i = list1, j = list2
  let final
  while (i && j) {
    const n1 = i.val
    const n2 = j.val
    if (n1 < n2) {
      if (!res) {
        res = i
        final = res
      } else {
        res.next = i
        res = res.next
      }
      i = i.next
    } else {
      if (!res) {
        res = j
        final = res
      } else {
        res.next = j
        res = res.next
      }
      j = j.next
    }
  }
  if (i) {
    res.next = i
    return final
  } else {
    res.next = j
    return final
  }
};
module.exports = mergeTwoLists
// @lc code=end



/*
// @lcpr case=start
// [1,2,4]\n[1,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n[]\n
// @lcpr case=end

// @lcpr case=start
// []\n[0]\n
// @lcpr case=end

 */


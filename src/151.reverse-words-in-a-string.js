/*
 * @lc app=leetcode.cn id=151 lang=javascript
 * @lcpr version=30204
 *
 * [151] 反转字符串中的单词
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const arr = s.trim().split('')
  let slow = fast = 0
  while (fast < arr.length) {
    if (fast + 1 < arr.length && arr[fast] === ' ' && arr[fast + 1] === ' ') {
      fast++
    } else {
      arr[slow++] = arr[fast++]
    }
  }
  arr.length = slow

  function reverse(arr, start, end) {
    let i = start, j = end
    while (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
  }

  reverse(arr, 0, arr.length - 1)
  slow = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      reverse(arr, slow, i - 1)
      slow = i + 1
    } else if (i === arr.length - 1) {
      reverse(arr, slow, i)
    }
  }
  const res = arr.join('')
  return res
};
// @lc code=end



/*
// @lcpr case=start
// "the sky is blue"\n
// @lcpr case=end

// @lcpr case=start
// "  hello world  "\n
// @lcpr case=end

// @lcpr case=start
// "a good   example"\n
// @lcpr case=end

 */


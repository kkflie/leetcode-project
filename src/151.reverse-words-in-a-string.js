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
  // review
  const arr = Array.from(s)
  const n = arr.length
  trim(arr)
  // console.log('s2: ', arr)
  reverse(arr, 0, n - 1)
  // console.log('s2: ', arr)
  let start = 0
  for (let i = 0; i <= n; i++) {
    if (arr[i] === ' ' || i === n) {
      reverse(arr, start, i - 1)
      // console.log('kk', start, i - 1, arr)
      start = i + 1
    }
  }
  // console.log('s2: ', arr)
  return arr.join('')
  function reverse(arr, start, end) {
    let right = end
    for (let i = start; i <= start + ((end - start) >> 1); i++) {
      // console.log('aa', start + ((end - start) >> 1))
      const temp = arr[i]
      arr[i] = arr[right]
      arr[right] = temp
      right--
      // console.log(arr)
    }
  }
  function trim(arr) {
    let slow = fast = 0
    const n = arr.length
    while (fast < n) {
      if (arr[fast] === ' ' && (fast === 0|| (arr[fast] === ' ' && arr[fast - 1] === ' '))) {
        fast++
      } else {
        arr[slow++] = arr[fast++]
      }
    }
    arr.length = arr[slow - 1] === ' ' ? slow - 1 : slow
  }
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


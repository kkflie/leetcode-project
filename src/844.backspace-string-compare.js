/*
 * @lc app=leetcode.cn id=844 lang=javascript
 * @lcpr version=30204
 *
 * [844] 比较含退格的字符串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  const st = []
  const st2 = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '#') {
      st.push(s[i])
    } else {
      st.pop()
    }
  }
  // const str1 = st.join('')
  st2.length = 0
  for (let i = 0; i < t.length; i++) {
    if (t[i] !== '#') {
      st2.push(t[i])
    } else {
      st2.pop()
    }
  }
  if (st.length !== st2.length)return false
  for (let i = 0;i < st.length;i++) {
    if(st[i]!==st2[i]){
      return false
    }
  }
  return true
  // const str2 = st.join('')
  // return str1 === str2
};
// @lc code=end



/*
// @lcpr case=start
// "ab#c"\n"ad#c"\n
// @lcpr case=end

// @lcpr case=start
// "ab##"\n"c#d#"\n
// @lcpr case=end

// @lcpr case=start
// "a#c"\n"b"\n
// @lcpr case=end

 */


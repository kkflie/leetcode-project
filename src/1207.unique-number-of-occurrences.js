/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 * @lcpr version=30204
 *
 * [1207] 独一无二的出现次数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let map = {}
  arr.forEach((e)=>{
    if(!map[e]){
      map[e]=0
    }
    map[e]++
  })
  arr = Object.values(map)
  map={}
  for (let i = 0; i < arr.length;i++){
    if(!map[arr[i]]){
      map[arr[i]]=1
    }else{
      return false
    }
  }
  return true
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,2,1,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

// @lcpr case=start
// [-3,0,1,-3,1,1,1,-3,10,0]\n
// @lcpr case=end

 */


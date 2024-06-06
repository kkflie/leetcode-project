/*
 * @lc app=leetcode.cn id=4 lang=javascript
 * @lcpr version=30202
 *
 * [4] 寻找两个正序数组的中位数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let i = 0
  let j = 0
  let k = 0
  const nums3 = []
  const m = nums1.length
  const n = nums2.length
  const max = m > n ? m : n
  const min = max === m ? n : m
  let mid = Math.floor((max - min) / 2) + min
  let max2 = -1
  const even = (max - min) % 2 === 0
  while (k <= mid) {
    const a1 = nums1[i] 
    const a2 = nums2[j]
    if (a1 === undefined) {
      nums3.push(a2)
      max2 = j
      j++
    } else if (a2 === undefined) {
      nums3.push(a1)
      max2 = i
      i++
    } else if (a1 < a2) {
      nums3.push(a1)
      max2 = i
      i++
    } else {
      nums3.push(a2)
      max2 = j
      j++
    }
    k++
  }
  if (even) {

    return (nums3[nums3.length - 1] - nums3[nums3.length - 2]) / 2 + nums3[nums3.length - 2]
  }
  // return nums1[i] > nums2[j] ? nums1[i] : nums2[j]
  return nums3[nums3.length - 1]
};
// @lc code=end



/*
// @lcpr case=start
// [1,3]\n[2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n[3,4]\n
// @lcpr case=end

 */


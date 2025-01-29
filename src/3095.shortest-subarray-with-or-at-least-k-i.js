/*
 * @lc app=leetcode.cn id=3095 lang=javascript
 * @lcpr version=30204
 *
 * [3095] 或值至少 K 的最短子数组 I
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
   const n = nums.length;
    const bits = new Array(30).fill(0);
    let res = Number.MAX_SAFE_INTEGER;;

    const calc = (bits) => {
        let ans = 0;
        for (let i = 0; i < bits.length; i++) {
            if (bits[i] > 0) {
                ans |= 1 << i;
            }
        }
        return ans;
    };

    let left = 0;
    for (let right = 0; right < n; right++) {
        for (let i = 0; i < 30; i++) {
            bits[i] += (nums[right] >> i) & 1;
        }
        while (left <= right && calc(bits) >= k) {
            res = Math.min(res, right - left + 1);
            for (let i = 0; i < 30; i++) {
                bits[i] -= (nums[left] >> i) & 1;
            }
            left++;
        }
    }

    return res === Number.MAX_SAFE_INTEGER ? -1 : res;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n2\n
// @lcpr case=end

// @lcpr case=start
// [2,1,8]\n10\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n0\n
// @lcpr case=end

 */


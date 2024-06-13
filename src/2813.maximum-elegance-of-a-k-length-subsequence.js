/*
 * @lc app=leetcode.cn id=2813 lang=javascript
 * @lcpr version=30203
 *
 * [2813] 子序列最大优雅度
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} items
 * @param {number} k
 * @return {number}
 */
var findMaximumElegance = function(items, k) {
  if (k === items.length) {
    const profitSum = items.reduce((a, b) => a + b[0], 0)
    const categories = getCategories(items)
    return profitSum + categories * categories
  }
  items.sort((a, b) => b[0] - a[0])
  // console.log(items)
  const path = []
  let sum = 0
  for (let i = 0; i < items.length; i++) {
    if (path.length < k) {
      path.push(i)
      if (path.length === k) {
        sum = caculate(path, items)
      }
      continue
    }
    let { sum: sum1, spliceIdx } = greed(path, items, i, sum)
    console.log('greed', sum1, sum)
    if (sum1 > sum) {
      sum = sum1
      path.splice(spliceIdx, 1, i)
    }
  }

  const pathArr = path.map((e) => items[e])
  // console.log('path-arr', pathArr)
  const profitSum = pathArr.reduce((a, b) => a + b[0], 0)
  const categories = getCategories(pathArr)
  return profitSum + categories * categories

  function getDic(items) {
    const dic = {}
    items.forEach((e, idx) => {
      const k = e[1]
      if (dic[k] === undefined) {
        dic[k] = idx
      } else {
        if (items[dic[k]][0] > e[0]) {
          dic[k] = idx
        }
      }
    })
    return dic
  }

  function getDic2(path, items) {
    const dic = {}
    const dicMul = {}
    for (let i = 0; i < path.length; i++) {
      const j = path[i]
      const e = items[j]
      const k = e[1]
      if (dic[k] === undefined) {
        dic[k] = j
      } else {
        dicMul[k] = true
        if (items[dic[k]][0] > e[0]) {
          dic[k] = j
        }
      }
    }
    return {
      dic,
      dicMul,
    }
  }
  function getCategories(items) {
    const dic = getDic(items)
    return Object.keys(dic).length
  }

  function caculate(path, items) {
    const pathArr = path.map(e => items[e])
    const categories = getCategories(pathArr)
    const profitSum = pathArr.reduce((pre, cur) => pre + cur[0], 0)
    return profitSum + categories * categories
  }

  function greed(path, items, curIdx, sumProp) {
    const {dic, dicMul} = getDic2(path, items)
    const categories = Object.keys(dic).length
    const dicArr = Object.values(dic)
    const cur = items[curIdx]
    let sum = -1
    let s0 = -1
    let spliceIdx = -1
    for (let i = 0; i < dicArr.length; i++) {
      const j = dicArr[i]
      const item = items[j]
      const k = item[1]
      if (k === cur[1]) {
        continue
      } else {
        const path1 = [...path]
        const s1 = dicMul[k] ? 2 * categories + 1 : 0
        const s = s1 + cur[0] - item[0]
        console.log('sx', s, s1, categories, dic, dicMul)
        if (s > s0) {
          s0 = s
          const idx = path1.findIndex((e) => e === j)
          spliceIdx = idx
          console.log('s', s0, s, spliceIdx, categories)
        }
        // const idx = path1.findIndex((e) => e === j)
        // path1.splice(idx, 1, curIdx)
        // const sum1 = caculate(path1, items) 
        // if (sum1 > sum) {
        //   sum = sum1
        //   spliceIdx = idx
        // }
      }
    }
    return {
      sum: sumProp + (spliceIdx < 0 ? 0 : s0),
      spliceIdx
    }
  }
};
// @lc code=end



/*
// @lcpr case=start
// [[3,2],[5,1],[10,1]]\n2\n
// @lcpr case=end

// @lcpr case=start
// [[3,1],[3,1],[2,2],[5,3]]\n3\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[2,1],[3,1]]\n3\n
// @lcpr case=end

// @lcpr case=start
// [[2,2],[6,2],[8,2]]\n1\n
// @lcpr case=end

// @lcpr case=start
// [[2,2],[8,3],[8,3]]\n2\n
// @lcpr case=end

// @lcpr case=start
// [[9,2],[8,2]]\n1\n
// @lcpr case=end

// @lcpr case=start
// [[3,3],[2,3],[9,1]]\n2\n
// @lcpr case=end
 */


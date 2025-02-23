var maxDifference = function(s) {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    const values = Array.from(map.values()).sort((a, b) => b - a)
    const values1 = values.filter((e) => e % 2)
    const values2 = values.filter((e) => e % 2 === 0)
    let res = 0 - Number.MAX_SAFE_INTEGER
    for (let i = 0; i < values1.length; i++) {
      for (let j = 0; j < values2.length; j++) {
        res = Math.max(res, values1[i] - values2[j])
      }
    }
    if (res === (0 - Number.MAX_SAFE_INTEGER)) return -1
    return res
};

const s = 'aaaaabbc'
const res = maxDifference(s)
console.log(res)
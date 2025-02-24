/**
 * @param {number[]} groups
 * @param {number[]} elements
 * @return {number[]}
 */
export var assignElements = function(groups, elements) {
  const res = []
  const cached = new Map()
  for (let i = 0; i < groups.length; i++) {
    if (cached.has(groups[i])) {
      res.push(cached.get(groups[i]))
      continue
    }
    let j = 0
    while(j < elements.length && groups[i] % elements[j]) {
      j++
    }
    j
    if (j >= elements.length) {
      j = -1
    }
    cached.set(groups[i], j)
    res.push(j)
  }
  return res
};
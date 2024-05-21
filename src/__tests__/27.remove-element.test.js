const removeElement = require('../27.remove-element')

test('case 1', () => {
  const nums = [3,2,2,3]
  const val = 3
  const res = removeElement(nums, val)
  expect(res).toBe(2)
  const finalNums = nums.slice(0, res).sort()
  expect(finalNums).toEqual([2,2])
})

test.only('case 2', () => {
  const nums = [0,1,2,2,3,0,4,2]
  const val = 2
  const res = removeElement(nums, val)
  expect(res).toBe(5)
  const finalNums = nums.slice(0, res).sort()
  expect(finalNums).toEqual([0,0,1,3,4])
})
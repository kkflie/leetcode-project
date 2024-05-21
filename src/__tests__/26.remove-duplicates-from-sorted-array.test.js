const removeDuplicates = require("../26.remove-duplicates-from-sorted-array");

test('case1', () => {
  const nums = [1,1,2]
  const res = removeDuplicates(nums)
  expect(res).toEqual(2)
  expect(nums.slice(0, res)).toEqual([1, 2])
})

test('case2', () => {
  const nums = [0,0,1,1,1,2,2,3,3,4]
  const res = removeDuplicates(nums)
  expect(res).toEqual(5)
  expect(nums.slice(0, res)).toEqual([0,1,2,3,4])
})
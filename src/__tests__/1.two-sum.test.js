const twoSum = require('../1.two-sum')

test('case 1', () => {
  const res = twoSum([2, 7, 11, 15], 9)
  expect(res).toEqual([0, 1])
})
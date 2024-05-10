const longestCommonPrefix = require('../14.longest-common-prefix')

test('["flower","flow","flight"]', () => {
  const res = longestCommonPrefix(["flower","flow","flight"])
  expect(res).toEqual('fl')
})

test('["flower","flow","flight"]', () => {
  const res = longestCommonPrefix(["dog","racecar","car"])
  expect(res).toEqual('')
})

test('["a"]', () => {
  const res = longestCommonPrefix(["a"])
  expect(res).toEqual('a')
})

test('["aaa","aa","aaa"]', () => {
  const res = longestCommonPrefix(["aaa","aa","aaa"])
  expect(res).toEqual('a')
})

test.only('["reflower","flow","flight"]', () => {
  const res = longestCommonPrefix(["reflower","flow","flight"])
  expect(res).toEqual('')
})
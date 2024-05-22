const longestPalindrome = require('../409.longest-palindrome')

test('case 1', () => {
  const s = 'abccccdd'
  const res = longestPalindrome(s)
  expect(res).toBe(7)
})

test('case 2', () => {
  const s = 'a'
  const res = longestPalindrome(s)
  expect(res).toBe(1)
})

test('case 3', () => {
  const s = 'aaaaaccc'
  const res = longestPalindrome(s)
  expect(res).toBe(7)
})
const validPalindrome = require('../680.valid-palindrome-ii')

test('case 1', () => {
  const s = "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
  const res = validPalindrome(s)
  expect(res).toBe(true)
})

test('case 2', () => {
  const s = "abc"
  const res = validPalindrome(s)
  expect(res).toBe(false)
})
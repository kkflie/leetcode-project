import { validSubstringCount } from '../3297. 统计重新排列后包含另一个字符串的子字符串数目 I'
describe('3297. 统计重新排列后包含另一个字符串的子字符串数目 I', () => {
  test('case 1', () => {
    const word1 = "bcca", word2 = "abc" 
    const res = validSubstringCount(word1, word2)
    expect(res).toBe(1)
  });
  test('case 2', () => {
    const word1 = "abcabc", word2 = "abc" 
    const res = validSubstringCount(word1, word2)
    expect(res).toBe(10)
  });
});

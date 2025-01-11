import { generateKey } from '../3270'

describe('3720.求出数字答案', () => {
  test('case 1', () => {
    const num1 = 1, num2 = 10, num3 = 1000
    const res = generateKey(num1, num2, num3)
    expect(res).toBe(0)
  }) 

  test('case 2', () => {
    const num1 = 987, num2 = 879, num3 = 798
    const res = generateKey(num1, num2, num3)
    expect(res).toBe(777)
  }) 
});

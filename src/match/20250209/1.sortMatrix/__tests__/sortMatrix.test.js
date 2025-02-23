import { sortMatrix, isCorrect } from "../main";

describe.only('sortMatrix', () => {
  it('case 1', () => {
    const arr = [[1,7,3],[9,8,2],[4,5,6]]
    const res = sortMatrix(arr)
    expect(res).toEqual([
      [8,2,3],[9,6,7],[4,5,1]
    ])
  })
})

describe('isCorrect', () => {
  it('asc', () => {
    const arr = [
      1, 2, 3
    ]
    const res = isCorrect(arr)
    expect(res).toBe(true)
  })
  it('desc', () => {
    const arr = [
      3, 2, 1
    ]
    const res = isCorrect(arr, 'DESC')
    expect(res).toBe(true)
  })
})
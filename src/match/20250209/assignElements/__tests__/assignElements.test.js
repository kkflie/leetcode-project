import { assignElements } from '../main'

describe('assignElements', () => {
  it('case1', () => {
    const groups = [8,4,3,2,4], elements = [4,2]
    const res = assignElements(groups, elements)
    console.log(res)
    expect(res).toEqual([0,0,-1,1,0])
  })
})
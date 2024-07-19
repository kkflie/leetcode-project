// 广度优先遍历查到的是最短路径

const beginStr = 'abc', endStr = 'def'
const strSet = new Set(['efc', 'dbc', 'ebc', 'dec', 'dfc', 'yhn'])
// console.log(strSet)
const visited = [], path = [], que = [beginStr]
let count = 0

while(que.length) {
  const word = que.shift().split('')
  count++
  for (let i = 0; i < word.length; i++) {
    // const c = word[i]
    for (let j = 0; j < 26; j++) {
      const c2 = String.fromCharCode(j + 'a'.charCodeAt(0)) 
      const newWord = word.slice(0, i).join('') + c2 + word.slice(i + 1).join('')
      if (newWord === endStr) {
        console.log('最短步数', count)
        return
      }
      if (strSet.has(newWord) && !visited.find((e) => e === newWord)) {
        console.log('newWord', newWord)
        que.push(newWord)
        visited.push(newWord)
      }
    }
  }
}
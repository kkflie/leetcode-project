const readline = require('readline');

// 创建 readline 接口
const rl = readline.createInterface({
  input: process.stdin,
});

let n;
let vec = [];
let prefixSum = [];
let presum = 0;
let readingVec = true; // 用来判断是否正在读取数组数据

// 读取数组输入
rl.on('line', (line) => {
  if (readingVec) {
    // 处理数组的第一行输入
    if (!n) {
      n = parseInt(line); // 读取数组大小 n
      return;
    }
    
    // 读取数组元素并计算前缀和
    const num = parseInt(line);
    vec.push(num);
    presum += num;
    prefixSum.push(presum);
    
    // 判断是否已经读取完所有的数组元素
    if (vec.length === n) {
      readingVec = false; // 结束读取数组，开始处理查询
      console.log("Enter queries (a b):");
    }
  } else {
    // 处理查询输入
    const [a, b] = line.split(' ').map(Number);
    
    let sum = 0;
    if (a === 0) {
      sum = prefixSum[b];
    } else {
      sum = prefixSum[b] - prefixSum[a - 1];
    }

    console.log(sum); // 输出查询结果
  }
});

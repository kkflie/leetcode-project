async function fun1(){
return false;
}

async function fun2(){
return Promise.resolve(false);
}

async function fun3(){
return Promise.reject(true);
}

async function fun4(){
return new Error('出错力！');
}

async function fun5(){
throw new Error('又出错力！');
}

async function test(){
try {
const r = await fun3();
// console.log('r', r instanceof Promise)
}catch(e){
console.log('fun: 捕捉到错误了',);
}
}


// test();

const res = String.prototype.trim.call(" \n abc\n ")
console.log(res)
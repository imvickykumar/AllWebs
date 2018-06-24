

// const xyz=require('./main');
//
// console.log(global.a);
//
// global.b=3;


const fun=require('./functions');
// console.log(fun());
//console.log(fun.getpath);

// console.log(fun[0]());
// console.log(fun[1]());
// console.log(fun[2]());
console.log(process.argv);
fun[3](process.argv.slice(2));



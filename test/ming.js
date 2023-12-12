// ./和../不能省略，且.js和.json文件后缀可以省略，c或c++编写的nodejs扩展文件（类似jni）也可以省略后缀
// let run = require('./run.js');
let run = require('./run');

console.log(run);
run.slow();
run.fast();


console.log(require)

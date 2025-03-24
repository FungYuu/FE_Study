const path = require('path');
// 总是返回被执行的 js 所在文件夹的绝对路径
console.log('__dirname', __dirname); // /Users/liuxin/Project/study/Node/learn

// 总是返回被执行的 js 的绝对路径
console.log('__filename', __filename); // /Users/liuxin/Project/study/Node/learn/4.path-2.js

// 总是返回运行 node 命令时所在的文件夹的绝对路径
console.log('process.cwd()', process.cwd()); // /Users/liuxin/Project/study

console.log("path.resolve('./')", path.resolve('./'));

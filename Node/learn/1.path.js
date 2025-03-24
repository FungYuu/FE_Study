const path = require('path');

// `path.join()`方法，从左往右 用来将多个路径片段拼接成一个完整的路径字符串， 不使用 + 号来处理拼接

const pathStr = path.join('/a', '/b/c', '../', './d', 'e');

// ../会抵消一层路径
console.log(pathStr, 'pathStr'); // /a/b/d/e

const pathStr2 = path.join(__dirname, '../../a', '/b/c', '../', './d', 'e');
console.log(pathStr2, 'pathStr2'); // /Users/liuxin/Project/study/a/b/d/e

// resolve对于给定的路径片段，是从右向左拼接处理，直至构造出绝对路径，遇到/则停止;

const pathStr3 = path.resolve(__dirname, 'a', 'b/c', 'd'); // /Users/liuxin/Project/study/Node/learn/a/b/c/d
const pathStr4 = path.resolve('/a', 'b/c', 'd'); // /a/b/c/d
const pathStr5 = path.resolve('/a', '/b/c', 'd'); // /b/c/d
const pathStr6 = path.resolve('/a', '/b/c', '/d'); // /d
console.log(pathStr3, 'pathStr3');
console.log(pathStr4, 'pathStr4');
console.log(pathStr5, 'pathStr5');
console.log(pathStr6, 'pathStr6');

// 返回文件的目录完整地址
const pathStr7 = path.dirname('/a/b/c'); // /a/b
const pathStr8 = path.dirname('/a'); // /

console.log(pathStr7, 'pathStr7');
console.log(pathStr8, 'pathStr8');

const pathStr9 = __dirname; // /Users/liuxin/Project/study/Node/learn
const pathStr10 = __filename; // /Users/liuxin/Project/study/Node/learn/1.path.js

console.log(pathStr9, 'pathStr9');
console.log(pathStr10, 'pathStr10');

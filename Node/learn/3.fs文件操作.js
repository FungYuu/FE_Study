const fs = require('fs');
const path = require('path');

/**
 * 异步读取文件
 * 三个参数
 * path 路径
 * options 格式
 * callback 回调函数，第一个参数是错误信息，第二个是成功返回的数据
 * 注意：要使用绝对路径
 */
// fs.readFile(path.resolve(__dirname, './text/test.txt'), 'utf8', (err, data) => {
//   if (err) {
//     console.log('err', err);
//     throw err;
//   }
//   console.log('readFile', data);
// });

/**
 * 同步读取文件
 */
// const data = fs.readFileSync(
//   path.resolve(__dirname, './text/test.txt'),
//   'utf8'
// );
// console.log('readFileSync', data);

/**
 * 写入文件（会将原文件中的内容全部替换）
 * 三个参数
 * path
 * data
 * callback
 */
// const text = '这是用于写入的字符串';
// fs.writeFile(path.resolve(__dirname, './text/test.txt'), text, (err) => {
//   if (err) throw err;
//   console.log('写入成功');
//   // 写入成功后读取测试
//   let data = fs.readFileSync(
//     path.resolve(__dirname, './text/test.txt'),
//     'utf-8'
//   );
//   console.log('new data -->' + data);
// });

// const text2 = '这是用于写入的字符串2';
// try {
//   fs.writeFileSync(path.resolve(__dirname, './text/test.txt'), text2);
//   console.log('写入成功');
//   const data = fs.readFileSync(
//     path.resolve(__dirname, './text/test.txt'),
//     'utf8'
//   );
//   console.log('readFileSync', data);
// } catch (error) {
//   console.log(error);
// }

/**
 * 进行追加文字
 * 先读再写
 */
// fs.readFile(path.resolve(__dirname, './text/test.txt'), 'utf8', (err, data) => {
//   if (!err) {
//     let newText = `${data}，这是用于追加的字符串`;
//     fs.writeFileSync(path.resolve(__dirname, './text/test.txt'), newText);
//     console.log('追加成功');

//     const dataSync = fs.readFileSync(
//       path.resolve(__dirname, './text/test.txt'),
//       'utf8'
//     );
//     console.log('readFileSync', dataSync);
//   }
// });

// -- 异步另一种文件追加操作(非覆盖方式)
// 写入文件内容（如果文件不存在会创建一个文件）
// fs.appendFile(
//   path.resolve(__dirname, './text/test.txt'),
//   'appendFile',
//   function (err) {
//     if (err) {
//       throw err;
//     }
//     // 写入成功后读取测试
//     var data = fs.readFileSync(
//       path.resolve(__dirname, './text/test.txt'),
//       'utf-8'
//     );
//     console.log(data);
//   }
// );
// -- 同步另一种文件追加操作(非覆盖方式)

// fs.appendFileSync(filePath, '同步追加一条新数据程序员成长指北789');

const fileExists = fs.existsSync(path.resolve(__dirname, './text/test.txt'));
console.log('fileExists', fileExists);
fs.mkdirSync(path.resolve(__dirname, './text/test2'));

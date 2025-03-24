# 确认不回顾一下 path 与 fs 知识点吗？

- 文件目录结构如下：
```tree
study/
  - Node/
    - learn/
      - 1.path.js
```

## path 模块

```js
const path = require('path');
```

- 10s，说出以下输出什么值：
```js
const pathStr1 = path.join('/a', '/b/c', '../', './d', 'e');

const pathStr2 = path.join(__dirname, '../../a', '/b/c', '../', './d', 'e');

const pathStr3 = path.resolve(__dirname, 'a', 'b/c', 'd');

const pathStr4 = path.resolve('/a', 'b/c', 'd'); 

const pathStr5 = path.resolve('/a', '/b/c', 'd');

const pathStr6 = path.resolve('/a', '/b/c', '/d');

const pathStr7 = path.dirname('/a/b/c');

const pathStr8 = path.dirname('/a');

const pathStr9 = __dirname; 

const pathStr10 = __filename;
```

- 下面揭晓答案：
```js
// ../会抵消一层路径
console.log(pathStr1, 'pathStr1'); // /a/b/d/e

console.log(pathStr2, 'pathStr2'); // /Users/xxx/Project/study/a/b/d/e

console.log(pathStr3, 'pathStr3'); // /Users/xxx/Project/study/Node/learn/a/b/c/d

console.log(pathStr4, 'pathStr4'); // /a/b/c/d

console.log(pathStr5, 'pathStr5'); // /b/c/d

console.log(pathStr6, 'pathStr6'); // /d

console.log(pathStr7, 'pathStr7'); // /a/b

console.log(pathStr8, 'pathStr8'); // /

console.log(pathStr9, 'pathStr9'); // /Users/xxx/Project/study/Node/learn

console.log(pathStr10, 'pathStr10'); // /Users/xxx/Project/study/Node/learn/1.path.js
```

- 如何？都答对了吗？没答对的，建议往下看，答对的，慢走哈。

### path.join()

> `path.join()`方法，从左往右 用来将多个路径片段拼接成一个完整的路径字符串， 不使用 + 号来处理拼接

### path.resolve()

> `path.resolve()`方法，从右往左，将多个路径片段拼接成一个完整的路径字符串， 不使用 + 号来处理拼接，直至构造出绝对路径（遇到/则停止）;

### path.dirname()

> `path.dirname()`方法，返回一个路径字符串，表示当前路径的父目录。

### __dirname

> `__dirname`变量，表示当前模块的目录名，它是一个全局变量，表示当前模块的目录名，总是返回被执行的 js 所在文件夹的绝对路径

### __filename

> `__filename`，表示当前模块的绝对路径，它是一个全局变量，表示当前模块的绝对路径，总是返回被执行的 js 所在文件的绝对路径

## fs模块

> 浏览器环境中无法使用 Node.js 的内置模块 fs。fs 模块是专门用于文件系统操作的，只能在服务器端（Node.js 环境）使用，而不能在客户端（浏览器）中使用。
> 在 Node.js 中，fs（文件系统）模块提供了同步和异步的函数来进行文件操作。同步函数会阻塞程序执行，直到操作完成，而异步函数则不会阻塞执行，操作完成时通过回调函数通知你。以下是关于这两种函数的详细说明。

1. 同步函数 (fs.sync)
同步函数会在执行完成之前阻塞代码的执行。这意味着代码会等到文件操作完成之后再继续执行。这类函数在处理文件时很直接，但通常不推荐在高并发应用中使用，因为它会阻塞事件循环，影响性能。

优点：

代码简单直观，易于理解和调试。
对于小规模的文件操作或脚本执行可能是足够的。
缺点：

阻塞执行，可能导致性能瓶颈，尤其是在高并发或处理大量文件的场景中。
在服务器端不推荐使用，会影响服务器的响应性能。

2. 异步函数 (fs.async)
异步函数不会阻塞事件循环，而是通过回调函数处理文件操作的结果。文件操作开始后，Node.js 会继续执行后续的代码，直到文件操作完成时，回调函数才会被调用，通知你操作的结果。

优点：

不会阻塞事件循环，适合高并发的文件操作。
适合 I/O 密集型的应用，可以提高程序的性能和响应能力。
缺点：

需要处理回调函数，代码可能会变得复杂（尤其是嵌套回调，常见的“回调地狱”问题）。
错误处理稍显麻烦，需要检查 err 参数。

3. Promise 和 fs.promises API
为了避免回调地狱，Node.js 提供了 fs.promises API，它使得文件操作可以以 Promise 的形式进行，提供了更现代的异步操作方式。

fs.promises 提供了与同步方法同名的异步方法，但它们返回的是 Promise 对象，可以结合 async/await 语法更清晰地处理异步操作。

常见的 fs.promises API：
  `fs.promises.readFile(path[, options])`
  `fs.promises.writeFile(path, data[, options])`
  `fs.promises.appendFile(path, data[, options])`
  `fs.promises.rename(oldPath, newPath)`
  `fs.promises.mkdir(path[, options])`
  `fs.promises.readdir(path[, options])`
  `fs.promises.unlink(path)`

- 下面记录的是非`Promise`

- 文件目录结构如下：
```tree
study/
  - Node/
    - learn/
      - text/
        - test.txt
      - 3.fs文件操作.js
```

### 文件读取

#### 异步-fs.readFile

```js
fs.readFile(filename,[encoding],[callback(error,data)]
```
- 示例：
```js
/**
 * 异步读取文件
 * 三个参数
 * path 路径
 * options 格式
 * callback 回调函数，第一个参数是错误信息，第二个是成功返回的数据
 * 注意：要使用绝对路径
 */
fs.readFile(path.resolve(__dirname, './text/test.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log('readFile', data);
});
```

#### 同步-fs.readFileSync

```js
fs.readFile(filename,[encoding]]
```
- 示例：
```js
/**
 * 同步读取文件
 * 两个参数
 */
const data = fs.readFileSync(
  path.resolve(__dirname, './text/test.txt'),
  'utf8'
);
console.log('readFileSync', data);
```

### 文件写入

#### 异步-fs.writeFile

```js
fs.writeFile(filename,data,[options],callback)
```
- 示例：
```js
/**
 * 异步写入文件（会将原文件中的内容全部替换）
 * 三个参数
 * path
 * data
 * callback
 */
const text = '这是用于写入的字符串';
fs.writeFile(path.resolve(__dirname, './text/test.txt'), text, (err) => {
  if (err) throw err;
  console.log('写入成功');
  // 写入成功后读取测试
  let data = fs.readFileSync(
    path.resolve(__dirname, './text/test.txt'),
    'utf-8'
  );
  console.log('new data -->' + data);
});
```

#### 同步-fs.writeFileSync

```js
fs.writeFileSync(path, content)
```
- 示例：
```js
const text2 = '这是用于写入的字符串2';
try {
  fs.writeFileSync(path.resolve(__dirname, './text/test.txt'), text2);
  console.log('写入成功');
  const data = fs.readFileSync(
    path.resolve(__dirname, './text/test.txt'),
    'utf8'
  );
  console.log('readFileSync', data); // readFileSync 这是用于写入的字符串2
} catch (error) {
  console.log(error);
}
```

### 文件追加

#### fs.readFile + fs.writeFile

- 示例：
```js
/**
 * 进行追加文字
 * 先读再写
 */
fs.readFile(path.resolve(__dirname, './text/test.txt'), 'utf8', (err, data) => {
  if (!err) {
    let newText = `${data}，这是用于追加的字符串`;
    fs.writeFileSync(path.resolve(__dirname, './text/test.txt'), newText);
    console.log('追加成功');

    const dataSync = fs.readFileSync(
      path.resolve(__dirname, './text/test.txt'),
      'utf8'
    );
    console.log('readFileSync', dataSync); // readFileSync 这是用于写入的字符串2，这是用于追加的字符串
  }
});
```

#### 异步-fs.appendFile

```js
fs.appendFile(path, content, callback)
```

- 示例：
```js
fs.appendFile(
  path.resolve(__dirname, './text/test.txt'),
  'appendFile',
  function (err) {
    if (err) {
      throw err;
    }
    // 写入成功后读取测试
    const data = fs.readFileSync(
      path.resolve(__dirname, './text/test.txt'),
      'utf-8'
    );
    console.log('appendFile', data);
  }
);
```

#### 同步-fs.appendFileSync

```js
fs.appendFileSync(path, content)
```

### 拷贝文件

#### 同步-fs.copyFile

```js
// filenameA拷贝到filenameB
fs.copyFile(filenameA, filenameB，callback)
```

#### 异步-fs.copyFileSync

```js
// filenameA拷贝到filenameB
fs.copyFileSync(filenameA, filenameB)
```

### 文件/目录是否存在

#### 同步-fs.exists

```js
fs.exists(path, callback)
```

#### 异步-fs.existsSync

```js
fs.existsSync(path)
```
示例：
```js
const fileExists = fs.existsSync(path.resolve(__dirname, './text/test.txt'));
console.log('fileExists', fileExists); // true
```

### 创建文件夹

#### 同步-fs.mkdir

```js
fs.mkdir(path, callback)
```

#### 异步-fs.mkdirSync

```js
fs.mkdirSync(path)
```
示例：
```js
fs.mkdirSync(path.resolve(__dirname, './text/test2'));
```

### 删除文件夹

#### 同步-fs.rmdir

```js
fs.rmdir(path, callback)
```

#### 异步-fs.rmdirSync
```js
fs.rmdirSync(path)
```

### 删除文件

#### 同步-fs.unlink

```js
fs.unlink(path, callback)
```

#### 异步-fs.unlinkSync

```js
fs.unlinkSync(path)
```

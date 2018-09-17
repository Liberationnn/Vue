// 如果是第三方模块，不需要加./，如果是文件模块需要加./
// 在另一个文件中将内容解析出来即可使用
// import拥有声明功能
// import {a, a1, fn} from './a.js';
import * as a from './a.js';
import b from './b.js';

a.fn();
console.log(a.a, a.a1, a);

console.log(b);
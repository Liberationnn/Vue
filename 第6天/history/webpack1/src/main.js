let str = require('./a.js');
import str2 from './b.js';
import './c.js';

console.log(str);
console.log(str2);

import './index.css';
import './style.less';

// 在js中引入图片需要import，或者写一个线上路径
import page from './1.png';
console.log(page); // page就是打包后图片的路径
let img = new Image();
img.src = page;
document.body.appendChild(img);
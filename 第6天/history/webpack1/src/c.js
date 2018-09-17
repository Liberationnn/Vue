let arr = [1, 2, 3, 4, 3, 1, 2, 3, 4, 5, 5];
arr = [...new Set(arr)];
let [a, b, c, d, e] = arr;
let fn = () => console.log([...arr]);
fn();
let obj = {name: 'sr'};
let obj1 = {age: 22};
let newObj = {...obj, ...obj1}; // es7语法
console.log(newObj);
// 布尔值
var isShow = false;
isShow = true;
// isShow = '123'; // 错误的写法
console.log('布尔值', isShow);
// 数值
var myAge = 18;
myAge = 16;
// myAge = '26'; // 错误的写法
console.log('数值', myAge);
// 字符串
var myName = 'zj';
myName = 'crystalZj';
// myName = false; // 错误的写法
console.log('字符串', myName);
// 数组
var list = [];
// list = [1,2,'3']; // 错误的写法
list = [1, 2, 3];
console.log('数组number', list);
var list2 = ['小明', '小李'];
console.log('数组string', list2);
var list3 = [false, true];
console.log('数组boolean', list3);
//元组 Tuple： 已知元素数量和元素类型
var x;
x = ['小明', 18];
// x = [23, 18]; // 错误的写法
// x = ['小明', 18, 19]; // 错误的写法
console.log('元组', x);
// 枚举 todo: 待深入学习 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var colorName = Color[2];
console.log('枚举', Color);
console.log('枚举c', c);
console.log('枚举Color.Green', Color.Green);
console.log('枚举colorName', colorName);
// Any
var notSure = '123';
notSure = 222;
notSure = false;
var listAny = [1, true, 'hello'];
console.log('any', notSure);
console.log('listAny', listAny);
// 空值
function showName() {
    console.log('zj');
}
showName();

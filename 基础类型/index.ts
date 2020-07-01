// 布尔值
let isShow: boolean = false;
isShow = true;
// isShow = '123'; // 错误的写法
console.log('布尔值', isShow);

// 数值
let myAge: number = 18;
myAge = 16;
// myAge = '26'; // 错误的写法
console.log('数值', myAge);

// 字符串
let myName: string = 'zj';
myName = 'crystalZj'
// myName = false; // 错误的写法
console.log('字符串', myName);

// 数组
let list: number[] = [];
// list = [1,2,'3']; // 错误的写法
list = [1,2,3];
console.log('数组number', list);
let list2: string[] = ['小明','小李'];
console.log('数组string', list2);
let list3: Array<boolean> = [false, true]
console.log('数组boolean', list3);

//元组 Tuple： 已知元素数量和元素类型
let x: [string, number];
x = ['小明', 18];
// x = [23, 18]; // 错误的写法
// x = ['小明', 18, 19]; // 错误的写法
console.log('元组', x)

// 枚举 todo: 待深入学习 
enum Color {Red, Green, Blue};
let c:Color = Color.Green;
let colorName: string = Color[2];
console.log('枚举',Color);
console.log('枚举c', c)
console.log('枚举Color.Green', Color.Green);
console.log('枚举colorName', colorName);

// Any
let notSure: any = '123';
notSure = 222;
notSure = false;
let listAny: any[] = [1, true, 'hello'];
console.log('any', notSure);
console.log('listAny', listAny);

// 空值void
function showName(): void {
  console.log('zj')
}
showName();

// null和undefinded
let u: undefined = undefined;
let n: null = null;
let y: string | null | undefined;
y = '123';

// never


// object


// 类型断言
// 非空断言运算符
export function checkFn (callback?: () => {}) {
  // 这个运算符可以用在变量名或者函数名之后，用来强调对应的元素是非 null|undefined 的
  callback!() // // 参数是可选入参，加了这个感叹号!之后，TS编译不报错

  // 但是如果没传回调在运行时就会报错，这儿只解决了在编译时不会报错，所以使用非空断言运算符的时候要注意，只有确定该参数是不可能为null或者undefined的时候才用
}

// 可选链运算符 ?.
// ?.用来判断左侧的表达式是否是 null | undefined，如果是则会停止表达式运行，可以减少我们大量的&&运算。

// 空值合并运算符 ??
// ??与||的功能是相似的，区别在于 ??在左侧表达式结果为 null 或者 undefined 时，才会返回右侧表达式
// 而 || 表达式，大家知道的，则对 false、''、NaN、0 等逻辑空值也会生效，不适于我们做对参数的合并
// let b
// let a = b ?? 19
// console.log(a, 'a') // 19

// keyof 的一个典型用途是限制访问对象的 key 合法化

// 泛型推导
type Dog<T> = {name: string, age: T}
function adopt<T> (dog: Dog<T>){
  console.log(dog.age)
}

adopt({ name: 'zs', age: 10 })

// 泛型约束（extends）
// number类型和T类型不支持+=这种操作符
// function sum<T>(value: T[]): number {
//   let count = 0;
//   value.forEach(v => count += v);
//   return count;
// }
// 使用extends
// function sum<T extends number> (value: T[]): number {
//   let count = 0
//   value.forEach(v => count += v)
//   return count
// }

// U一定是T的key类型中的子集
function pick<T, U extends keyof T> (obj: T, key: U){
  console.log(obj[key])
}

pick({ a: 1 }, 'a')

// 泛型条件
// T extends U? X: Y

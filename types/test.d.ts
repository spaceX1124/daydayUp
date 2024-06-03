// 这是全局的类型A
// declare type AA = string

// 这是全局的命名空间,
// declare namespace BB {
//    type B1 = number
// }
// 所以以前写paas的时候，应该定义一个paas的命名空间，然后在这个空间中定义所有跟paas相关的类型变量，以后要记得就行了,当然应该是在模块中，这种不能是全局的命名空间

// 在模块化的类型文件中也可以写全局类型变量，如下格式
// export {}
// declare global{
//    type S1 = string
// }

// .d.ts的文件中的变量或者类型不一定就是全局的
//  如果.d.ts文件中定义了全局变量或类型，并且没有限定在模块或命名空间内，那么它可以被视为全局声明，对引用它的任何文件可见
// 也就是说如果使用了命名空间，或者模块化就，那么这些类型或者变量就不是全局的

// 1.有命名空间，那么命名空间中的类型就不是全局,但是Type1是全局的，所以在全局中不能直接使用Recordable，但是可以使用Type1.Recordable
// declare namespace Type1 {
//   export type Recordable<T = any> = Record<string, T>
// }
// 2.如果命名空间通过export导出去的,那么这个命名空间就是模块化的，需要引入才能使用
// export namespace Type1 {
//   export type Recordable<T = any> = Record<string, T>
// }

// 3. 有export之后，第1点的命名空间也不是全局的
// export {}
// declare global {
//    type Recordable1<T = any> = Record<string, T>
// }
// type Recordable1<T = any> = Record<string, T>

// 使用declare和不使用有什么区别？？？
// 首先.d.ts文件中包含顶层import/export就是模块运行模式
// .d.ts文件中不包含import/export就是脚本运行模式
// 在模块模式下，导出一个类型，如果该类型没有使用declare，那么该类型会被导出为实际的代码
// 在脚本模式下，TypeScript编译器会把所有声明的变量、属性、函数等都看作是全局的，
// 因此它们可以在脚本中的任何地方被访问。在这种情况下，如果你没有使用declare关键字，那么你定义的变量、属性、函数等就会被视为全局的变量、属性、函数等

// 在d.ts文件中，declare关键字主要用于声明变量、属性、函数等，
// 但不实际执行任何代码。它告诉TypeScript编译器在类型检查时考虑这个变量或属性，但不要在编译后的JavaScript代码中生成对应的代码
// 总之就是用了declare在编译后不会生成对应的代码，没用就会生成。

// 这个类型可以将任何类型的键值转化成number类型
export type TypeToNumber<T> = {
  [key in keyof T]: number
}

export type StringType = string
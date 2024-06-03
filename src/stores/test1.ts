import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useTest1Store = defineStore('test1', () => {
  const a1 = 1
  const a2 = ref(1)
  const a3 = reactive({ a: 1 })
  function aFn () {}
  return { a1, a2, a3, aFn }
})

// import { useTest1Store } from '@/stores/test1.ts'
// import { storeToRefs } from 'pinia'
// const test1 = useTest1Store()
// console.log(test1, 'test1')
// const {a2, a3} = storeToRefs(test1)
// console.log(test2, 'test2')

/**
 * 解构1
 * const test1 = useTest1Store()，结构 =》 const {a1,a2,a3,aFn} = useTest1Store()
 * 以上解构会导致a2和a3失去响应式
 * 结论：如果要访问store中的响应式数据（ref,reactive），不要直接解构，函数和非响应式的数据可以解构（a1,aFn）
 * 解构2
 * const {a2, a3} = storeToRefs(test1)
 * 结论：可以通过storeToRefs提取属性时保持其响应性，提取的属性会跳过函数和非响应式数据
 * */

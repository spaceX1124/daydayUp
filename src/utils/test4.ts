const requestQueue = (concurrency) => {
  concurrency = concurrency || 6 // 最大并发数
  const queue = [] // 请求池
  let current = 0

  const dequeue = () => {
    while (current < concurrency && queue.length) {
      current++
      const requestPromiseFactory = queue.shift() // 出列
      requestPromiseFactory()
      .then(() => { // 成功的请求逻辑
      })
      .catch(error => { // 失败
        console.log(error)
      })
      .finally(() => {
        current--
        dequeue()
      })
    }
  }
  return (requestPromiseFactory) => {
    queue.push(requestPromiseFactory) // 入队
    dequeue()
  }
}

// 设置最大并发数
export const enqueue = requestQueue(2)

// 如下就是并发请求的时候
// import { enqueue } from '@/utils/test4.ts'
// import axios from 'axios'
//
// for (let i = 0; i < new Array(100).fill('').length; i++) {
//   enqueue(() => axios.get('https://r.clarity.ms/collect' + i))
// }

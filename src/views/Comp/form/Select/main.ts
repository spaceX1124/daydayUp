import { Common } from '@/types'

// function getList () {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([{
//         name: '张三',
//         id: 1
//       },
//       {
//         name: '李四',
//         id: 2
//       },
//       {
//         name: '王五',
//         id: 3
//       }])
//     }, 1000)
//   })
// }
export const schemas:Common.BasicParams[] = [
  {
    key: 'key1',
    title: '下拉框',
    component: 'Select',
    dataList: [
      {
        label: '选项一',
        value: 1
      },
      {
        label: '选项二',
        value: 2
      },
      {
        label: '选项三',
        value: 3
      }
    ],
    required: true,
    componentProps: {
      multiple: true
    }
  }
  // {
  //   key: 'key2',
  //   title: '远程搜索',
  //   component: 'Select',
  //   required: true,
  //   async: {
  //     url: 'getList',
  //     label: 'name',
  //     value: 'id'
  //   },
  //   componentProps: {
  //     multiple: true
  //   }
  // }
]
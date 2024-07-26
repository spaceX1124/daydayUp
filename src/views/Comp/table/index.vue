<template>
  <div>
    <VTable @initTableAction="initTableAction"/>
  </div>
</template>
<script lang="ts" setup>
import { VTable, useTable } from '@/components/common/VTable'
import { TableColumn } from '@/types/table.ts'
import { FormEnum } from '@/enums/form.ts'

// 当我传一个json进来之后，可以渲染搜索，表格，表单
const columns = ref<TableColumn[]>([
  {
    key: 'key1',
    title: '标题1',
    component: FormEnum.MyInput
  },
  {
    key: 'key2',
    title: '标题2',
    component: FormEnum.MyInput
  },
  {
    key: 'key3',
    title: '标题3',
    component: FormEnum.MyInput
  },
  {
    key: 'key4',
    title: '标题4',
    component: FormEnum.MyInput,
    minWidth: '200px',
    cellRender: () => {
      return h('div', 'sadksaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa撒洪都航空撒客户')
    }
  },
  {
    key: 'key5',
    title: '标题5',
    component: FormEnum.MyInput
  }
])
const tableData = ref<Recordable[]>([])
const [initTableAction, { setProps, setLoading }] = useTable({
  columns: unref(columns)
})
// let obj: Recordable = {}
// for (let i = 0; i < 5; i++) {
//   columns.value.push({
//     key: `key${i}`,
//     title: `标题${i}`,
//     component: FormEnum.MyInput
//     // cellRender: ({ column, rowIndex }) => {
//     //   console.log(column, 'column222', rowIndex)
//     //   return h('span', 12)
//     // }
//   })
//   obj[`key${i}`] = `张三${i}`
// }
onMounted(() => {
  setLoading(true)
  setTimeout(() => {
    for(let i = 0;i < 5; i++) {
      tableData.value.push({ key2: '就撒来得及扫觉得撒娇佛i觉得四间房哦i觉得是佛i几点睡觉佛偈大搜i就放大搜i就佛i觉得搜i甲方大搜i就佛挡杀佛不合格大厦' })
    }
    setProps({
      tableData: unref(tableData)
    })
  }, 2000)
})
</script>
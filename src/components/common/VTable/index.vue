<template>
  <div>
    <vxe-table
      border
      show-overflow
      height="400"
      :row-config="{isHover: true}"
      :data="tableData"
      :scroll-y="{enabled: true}">
      <vxe-column type="seq" width="100"/>
      <vxe-column field="name" title="Name" sortable/>
      <vxe-column field="role" title="Role"/>
      <vxe-column field="sex" title="Sex"/>
    </vxe-table>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import 'vxe-table/lib/style.css'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
}

const tableData = ref<RowVO[]>([])

setTimeout(() => {
  // 模拟数据
  const mockList: RowVO[] = []
  for (let index = 0; index < 5000; index++) {
    mockList.push({
      id: index,
      name: 'Test' + index,
      role: 'Developer',
      sex: '男'
    })
  }
  tableData.value = mockList
}, 100)
</script>
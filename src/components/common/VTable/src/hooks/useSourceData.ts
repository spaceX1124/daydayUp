import type { BasicTableProps } from '@/components/common/VTable/src/types/table.ts'
import { ComputedRef } from 'vue'

interface ActionType {
  setLoading: (loading: boolean) => void
}
interface Result {
  getTableData: ComputedRef<Recordable[]>
}

/**
 * 处理表格数据
 * @param {ComputedRef<BasicTableProps>} innerProps 通过useTable传入的一些参数
 * @param {ActionType} actions 额外需要的一些参数
 * @return {Result} 需要暴露给外面的一些数据和方法
 * */
export function useSourceData (innerProps:ComputedRef<BasicTableProps>, actions: ActionType): Result {
  const { setLoading } = actions
  // 表格数据
  const tableDataRef = ref<Recordable[]>([])
  // 监听外部传入的表格数据变更
  watch(() => innerProps.value.tableData, () => {
    console.log('变了，啊')
    setLoading(false)
    const { tableData } = unref(innerProps)
    tableData && (tableDataRef.value = tableData)
  })
  // 获取表格数据
  const getTableData = computed(() => ([...unref(tableDataRef)]))
  return {
    getTableData
  }
}
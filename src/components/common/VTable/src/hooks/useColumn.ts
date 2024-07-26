import { TableColumn } from '@/types/table.ts'
import type { BasicTableProps, PaginationInfo } from '@/components/common/VTable/src/types/table.ts'
import { ComputedRef } from 'vue'
import { cloneDeep } from '@/utils/tools.ts'

interface ActionType {
  getPaginationInfo: ComputedRef<PaginationInfo>
}
interface Result {
  getColumns: ComputedRef<TableColumn[]>
}
/**
 * 负责从外部传入的表头数据中,处理动态的表头，外面需要定义传进来的格式，然后我们通过传递进来的格式去进一步处理，最终渲染
 * @param {innerProps} innerProps 通过useTable传入的一些参数
 * @param {ActionType} actions
 * @return {Result} 需要暴露给外面的一些数据和方法
 * */
export function useColumns (innerProps:ComputedRef<BasicTableProps>, actions: ActionType): Result {
  const { getPaginationInfo } = actions
  // 表头字段
  const columns = ref<TableColumn[]>([])
  // 处理并过滤表头字段
  function dealColumnAndFilter () {
    // 表头是异步的，直接return
    if (!innerProps.value.columns) return
    let columnsArr: TableColumn[] = []
    columnsArr = cloneDeep(innerProps.value.columns).filter(column => {
      return {
        ...column
      }
    })
    // 设置序号
    if(!unref(innerProps).seqHidden){
      columnsArr.unshift({
        key: 'indexSeq',
        title: '序号',
        type: 'seq',
        width: '50px',
        cellRender: ({ rowIndex }) => {
          const num = (unref(getPaginationInfo).pageNum - 1) * 10 + rowIndex + 1
          return h('span', num)
        }
      })
    }
    columns.value = columnsArr
  }
  onMounted(() => {
    dealColumnAndFilter()
  })

  // 获取处理之后的表头数据
  const getColumns = computed(() => unref(columns))
  return {
    getColumns
  }
}
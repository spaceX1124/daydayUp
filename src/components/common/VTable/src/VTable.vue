<template>
  <vxe-table v-bind="getBindingVTable">
    <template #loading>
      <div class="loading-box">
        <el-icon class="is-loading" size="28px">
          <Loading />
        </el-icon>
        <span>Loading...</span>
      </div>
    </template>
    <vxe-column
      v-for="column in showColumns"
      :key="column.key"
      v-bind="getBindingVColumn(column)">
      <template v-slot="scope">
        <CellRender v-if="column.cellRender"
                    :scope="scope"
                    :column="column"/>
        <template v-else>
          {{dealShowVal(scope.row[column.key])}}
        </template>
      </template>
    </vxe-column>
  </vxe-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import 'vxe-table/lib/style.css'
import type { BasicTableProps, TableActionType } from './types/table.ts'
import { useSourceData } from '@/components/common/VTable/src/hooks/useSourceData.ts'
import { useColumns } from '@/components/common/VTable/src/hooks/useColumn.ts'
import { useLoading } from '@/components/common/VTable/src/hooks/useLoading.ts'
import { Loading } from '@element-plus/icons-vue'
import { isNullOrUndefOrEmpty } from '@/utils/is.ts'
import { TableColumn } from '@/types/table.ts'
import CellRender from '@/components/common/VTable/src/components/cellRender.vue'
import { VxeColumnProps } from 'vxe-table/types/column'
import { usePagination } from '@/components/common/VTable/src/hooks/usePagination.ts'
import { VxeTableProps } from 'vxe-table/types/table'

// 当前外部使用table组件时通过useTable传入的一些参数（BasicTableProps）
let innerProps = ref<BasicTableProps>({})

// 获取通过useTable传入的一些参数
let getProps = computed(() => {
  return { ...unref(innerProps) }
})

// 处理分页
const { getPaginationInfo } = usePagination(getProps)

// 处理表格加载状态
const { getLoading, setLoading } = useLoading()

// 处理表头数据
let { getColumns } = useColumns(getProps, { getPaginationInfo })
// 传递给VColumn的表头数据
const showColumns = computed(() => unref(getColumns))

// 处理表格数据
let { getTableData } = useSourceData(getProps, { setLoading })

// 给vxe-table绑定的一些参数
const getBindingVTable = computed<VxeTableProps>(() => {
  return {
    loading: unref(getLoading), // 当前表格加载状态
    data: unref(getTableData), // 表格数据
    stripe: unref(getProps).stripe || false, // 是否带有斑马纹
    border: unref(getProps).border || false, // 边框
    round: true,
    height: 400,
    rowConfig: { isHover: true }
  }
})

// 给vxe-column绑定的一些参数
function getBindingVColumn (column: TableColumn): VxeColumnProps {
  return {
    field: column.key,
    title: column.title,
    width: column.width || '', // 没传的时候，不设置width，按照表格的宽度进行均匀分配
    minWidth: column.minWidth || '',
    type: column.type || null,
    showOverflow: 'tooltip'
  }
}

// 重新设置新的参数
function setProps (propsData: BasicTableProps) {
  innerProps.value = { ...unref(innerProps), ...propsData }
}

// 可被外部执行的一些方法
const tableAction: TableActionType = {
  setProps,
  setLoading
}

const emits = defineEmits(['initTableAction'])
emits('initTableAction', tableAction)

// 处理表格回显值
function dealShowVal (val: any) {
  if (isNullOrUndefOrEmpty(val)) {
    return '-'
  }
  return val
}

</script>
<style lang="scss" scoped>
.loading-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
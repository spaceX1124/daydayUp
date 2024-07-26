import { BasicPageProps, PageActionType } from '@/components/common/InitPage/src/types'
import { BasicTableProps, TableActionType } from '@/components/common/VTable/src/types/table.ts'
import { BasicFormProps, FormActionType } from '@/components/common/BasicForm/src/types/form.ts'

export function useInitPage (
  pageProps?:BasicPageProps
):[(tableAction: TableActionType) => void, TableActionType, FormActionType] {
// 存储表格中定义的方法
  const pageActionRef = ref<PageActionType>()
  // 初始化方法，方便在外部使用
  function initPageAction (pageAction: PageActionType) {
    pageActionRef.value = pageAction
    pageProps && pageProps.setProps(tableProps)
  }
  // 暴露给外部使用的一些方法，当我们在外部调用下面的方法的时候，实际上是调用tableActionRef中的方法，也就是VTable/index.vue中tableAction中的方法
  const tableMethods:TableActionType = {
    setProps: (tableProps:BasicTableProps) => {
      tableActionRef.value?.setProps(tableProps)
    },
    setLoading: (loading:boolean) => {
      tableActionRef.value?.setLoading(loading)
    }
  }
  const formMethods:FormActionType = {
    setProps: (tableProps) => {
      tableActionRef.value?.setProps(tableProps)
    },
    setFormModelValue: (key, value, schema) => {
      tableActionRef.value?.setFormModelValue(key, value, schema)
    },
    setFieldsValue: (values) => {
      tableActionRef.value?.setFieldsValue(values)
    }
  }

  return [initTableAction, tableMethods, formMethods]
}

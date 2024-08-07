import type { BasicFormProps } from '../types/form.ts'
import { ComputedRef } from 'vue'
interface ActionType {
  formModel: Global.Recordable
}
/**
 * @param {ComputedRef<BasicFormProps>} formProps 通过useForm传入的一些参数
 * @param {ActionType} actions
 * */
export function useFormValues (formProps: ComputedRef<BasicFormProps>, actions: ActionType) {
  // 初始化默认表单数据
  function initDefault () {
    const { schemas = [], formData = {} } = unref(formProps)
    const { formModel } = actions
    schemas.forEach(schema => {
      const { defaultValue, key } = schema
      // 优先级-> 表单数据>默认值
      formModel[key] = formData[key] || defaultValue || ''
    })
    console.log(formModel, 'formModel')
  }
  return { initDefault }
}
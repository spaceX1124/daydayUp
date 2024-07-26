<template>
  <BasicForm/>
  <VTable/>
</template>
<script lang="ts" setup>
import { BasicForm } from '@/components/common/BasicForm'
import { VTable } from '@/components/common/VTable'
import { EmitEvent } from '@/components/common/InitPage/src/types'
import { FormActionType } from '@/components/common/BasicForm/src/types/form.ts'
import { TableActionType } from '@/components/common/VTable/src/types/table.ts'

const emit = defineEmits<EmitEvent>()
// 可被外部执行的一些方法
const tableAction: TableActionType = {
  setProps,
  setLoading
}
const formAction: FormActionType = {
  setProps,
  setFormModelValue,
  setFieldsValue
}
emit('register', tableAction, formAction)
</script>
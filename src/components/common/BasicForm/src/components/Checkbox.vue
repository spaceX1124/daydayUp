<template>
  <el-checkbox-group
    v-bind="$props"
    :model-value="innerValue"
    @change="change">
    <el-checkbox v-for="item in showList"
                 :label="item.label"
                 :value="item.value"
                 :key="item.value" />
  </el-checkbox-group>
</template>
<script lang="ts" setup>
import { List } from '@/types/common.ts'
import { Common } from '@/types'

interface PropsType {
  schema:Common.BasicParams; // 当前字段配置信息
  modelValue?: string | number | string[] | number[];
  disabled?: boolean;
}
const props = withDefaults(defineProps<PropsType>(), {})

const emit = defineEmits(['update:modelValue'])
const innerValue = computed({
  get () {
    return props.modelValue
  },
  set (newVal) {
    console.log(newVal, 'newVal')
    emit('update:modelValue', newVal)
  }
})
// 要展示的list数据
const showList = ref<List[]>([])
onMounted(() => {
  showList.value = props.schema?.dataList || []
})
function change (val: string[] | number[]) {
  innerValue.value = val
}

</script>
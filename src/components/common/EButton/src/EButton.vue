<template>
  <el-button v-bind="getBindValue" @click="handleClick">
    <slot />
  </el-button>
</template>
<script lang="ts" setup>
import { computed, type PropType, ref } from 'vue'

defineOptions({
  name: 'EButton'
})
const props = defineProps({
  type: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  text: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<'large' | 'default' | 'small'>,
    default: 'default'
  },
  plain: {
    type: Boolean,
    default: false
  }
})

// 通过v-bind绑定一个对象传递给按钮组件
const getBindValue = computed(() => ({ ...props, loading: loading.value }))

const loading = ref(false)
const emit = defineEmits(['click'])

function handleClick () {
  if (props.disabled) return
  // 优化：如果是涉及到提交等于后端的交互点击，请添加loading
  if (props.isLoading) {
    loading.value = true
    emit('click', () => loading.value = false)
  } else {
    emit('click')
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
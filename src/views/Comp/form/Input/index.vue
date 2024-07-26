<template>
  <div class="form-content">
    <BasicForm @register="register" />
  </div>
</template>
<script lang="tsx" setup>
import { BasicForm, useForm } from '@/components/common/BasicForm'
import { schemas } from './main.tsx'
const [register] = useForm({
  schemas: unref(schemas),
  formData: {
    key1: '哈哈',
    key2: '解决'
  }
})
</script>
<style lang="scss" scoped>
.form-content {
  padding: 20px;
}
</style>
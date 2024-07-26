<template>
  <div class="form-content">
    <BasicForm @register="register" />
  </div>
</template>
<script lang="tsx" setup>
import { BasicForm, useForm } from '@/components/common/BasicForm'

import { schemas } from './main.ts'
const [register] = useForm({
  schemas: unref(schemas)
})
</script>
<style lang="scss" scoped>
.form-content {
  padding: 20px;
}
</style>
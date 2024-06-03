<template>
  <div>
    <router-view/>
  </div>
</template>
<script lang="ts" setup>
const a = ref(0)
console.log(a)
const b = computed(() => {
  return 123
})
console.log(b)
</script>
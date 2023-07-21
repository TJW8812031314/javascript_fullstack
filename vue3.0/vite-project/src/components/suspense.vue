<template>
  <Suspense>
    <template #default>
      <async :timeout="3000" />
    </template>
    <template #fallback>
      <h1>加载中...</h1>
    </template>
  </Suspense>
</template>

<script>
import async from './async.vue'
export default {
  components: {
    async
  }
}
</script>

<style></style>
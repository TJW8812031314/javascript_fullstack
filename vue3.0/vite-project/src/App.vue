<template>
  <div class="confim-modal">
    <button @click="isOpen = true">打开</button>

    <Teleport to="#footer">
      <div v-if="isOpen">
        <p>信息信息信息信息信息信息信息信息信息信息</p>
        <button @click="isOpen = false">取消</button>
      </div>
    </Teleport>
  </div>
  <asyncComponent />
</template>

<script>
import asyncComponent from './components/suspense.vue'
import { ref } from 'vue';
export default {
  components: {
    asyncComponent
  },
  setup() {
    const isOpen = ref(false)
    return {
      isOpen
    }
  }
}

</script>
<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

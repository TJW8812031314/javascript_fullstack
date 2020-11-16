<template>
  <div>
    <p v-show="isShowing">mixins</p>
    <button @click="toggleShow">按钮</button>
  </div>
</template>

<script>
import { toggle } from '@/utils/mixinTest.js'

export default {
  mixins: [toggle],
  data() {
    return {
      msg: ''
    }
  }
}
</script>

<style>

</style>n
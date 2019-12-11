<template>
  
</template>

<script>
import bus from '@/bus/bus'
export default {
  data () {
    return {
      mess: ''
    }
  },
  mounted () {
    bus.$on('test', (text) => {
      console.log(text)
    })
  }
}
</script>

<style>

</style>

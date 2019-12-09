<template>
  <div class="b-test">
    B{{name}}
    <testc></testc>
  </div>
</template>

<script>
import C from './c'
export default {
  inject: ['name'],
  mounted () {
    console.log(this.name)
  },
  components: {
    'testc': C
  }
}
</script>

<style>

</style>

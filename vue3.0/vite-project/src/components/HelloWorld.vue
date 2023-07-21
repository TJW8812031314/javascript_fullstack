<template>
  <h1>{{ state.count }} * 2 = {{ double }}</h1>
  <div class="">{{ num }}</div>
  <button @click="add">累加</button>
</template>
<script>
import { reactive, computed, ref, onMounted } from 'vue' // 更利于tree-shaking
export default {
  setup() { // 入口函数
    // const state = reactive({
    //   count: 1
    // })
    const { state, double } = useCounter(1)
    const num = ref(2)

    function add() {
      state.count++
      num.value += 10
      console.log(state.count);
    }

    // const double = computed(() => state.count*2)
    onMounted(() =>{
      console.log('mounted')
    })
    return {
      state,
      double,
      num,
      add
    }

  }
}
function useCounter(count) {
  const state = reactive({
    count: count
  })
  const double = computed(() => state.count * 2)
  return { state, double }
}
</script>
<style scoped></style>

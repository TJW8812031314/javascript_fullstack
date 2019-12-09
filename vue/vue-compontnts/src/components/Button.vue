<template>
  <div>
    <button :class="'i-button-size'+size" @click="headleClick">
      <slot name="icon"></slot>
      <slot></slot>
    </button>
  </div>
</template>

<script>
function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
}
export default {
  props: {
    size: {
      // type: String,
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    }
  },
  data () {
    return {
      messge: '子组件的内容'
    }
  },
  methods: {
    headleClick () {
      this.$emit('on-click')
    },
    sureClick () {
      this.$emit('fang', this.messge)
    }
  }
}

</script>

<style scoped>
button {
  border: 1px solid brange;
  background-color: yellow;
  color: black
}
.i-button-sizelarge {
  padding: 8px 10px;
}
.i-button-sizesmall {
  padding: 10px 16px\
}
.i-button-sizedefault {

}
</style>

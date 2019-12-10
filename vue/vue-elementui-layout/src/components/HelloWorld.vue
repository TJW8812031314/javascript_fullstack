<template>
<div>
    <!-- 行 -->
  <!-- <el-row> -->
    <!-- 列 -->
    <!-- <el-col :span="12">
      12
    </el-col>
    <el-col :span="6">
      6
    </el-col>
    <el-col :span="6">
      6
    </el-col>
  </el-row> -->
  <MyRow tag="section">
    <MyCol :span="12">12</MyCol>
    <MyCol :span="6">6</MyCol>
    <MyCol :span="6">6</MyCol>
  </MyRow>

</div>
  
</template>

<script>
import MyRow from './My-Row'
import MyCol from './My-Col'
export default {
  name: 'HelloWorld',
  components: {
    MyRow,
    MyCol
  }
}
</script>

<style scoped>

</style>
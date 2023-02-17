<template>
  <div>
    <p>原数组：{{msg}}</p>
    <!-- 2.使用过滤器后 -->
    <p>使用后：{{msg | reverse}}</p>
    <p :title="msg | toUP">鼠标ch昂听</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      msg:'hello vue'
    }
  },
  // 方式2;局部 -过滤器
  //  只能在当前vue文件内使用
  filters: {
    toUP(val) {
      return val.toUpperCase()
    }
  }
}
</script>

<style>

</style>
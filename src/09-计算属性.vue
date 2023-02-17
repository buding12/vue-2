<template>
  <div>
    <!-- 计算属性 -->
  <p>{{ reverseMessage }}</p>
  <p>{{ reverseMessage }}</p>
  <p>{{ reverseMessage }}</p>
  <!-- 函数 -->
  <p>{{ getMessage() }}</p>
  <p>{{ getMessage() }}</p>
  <p>{{ getMessage() }}</p>
  </div>
</template>

<script>

export default {
 data() {
  return {
    msg :'hello vue'
  }
  },
//  计算属性
// 计算属性有缓存功能，依赖项不变的话，就从缓存区调用
  computed: {
    reverseMessage() {
      console.log('计算属性执行了');
    return this.msg.split('').reverse().join('')
   }
  },
  methods: {
    getMessage() {
      console.log('函数执行了');
      return this.msg.split('').reverse().join('')
  }
}
}
</script>

<style>

</style>
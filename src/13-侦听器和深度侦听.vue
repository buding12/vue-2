<template>
  <div>
    <h1>深度侦听</h1>
    <input type="text" v-model="user.name" />
    <input type="text" v-model="user.age" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        age: 0,
      },
    };
  },
  // 深度侦听
  // 语法：
  //   变量名：{
  //   immediate: true, //立即侦听（网页打开handler执行一次）
  //   deep: true, //深度侦听（对象里面层的值改变）
  //   handler(newVal, oldVal) {
  // }
  // }
  watch: {
    user: {
      immediate: true, //立即侦听（网页打开handler执行一次）
      deep: true, //深度侦听（对象里面层的值改变）
      handler(newVal, oldVal) {
        console.log(newVal, oldVal);
      },
    },
  },
};
</script>

<style>
</style>
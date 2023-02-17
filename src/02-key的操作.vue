<template>
  <div>
    <ul>
      <li v-for="obj in arr" :key="obj.id">{{ obj.name }}</li>
    </ul>
    <button @click="fn">按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "张飞",
          id: 13,
        },
        {
          name: "赵云",
          id: 15,
        },
        {
          name: "马超",
          id: 19,
        },
      ],
    };
  },
  methods: {
    fn() {
      this.arr.splice(1, 0, {
        id: 19,
        name: "新来的",
      });
    },
  },
};
</script>

<style>
</style>
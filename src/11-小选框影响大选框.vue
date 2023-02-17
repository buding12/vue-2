<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isAll"/>
    <button>反选</button>
    <ul>
      <li v-for="(obj, index) in arr" :key="index">
        <!-- 3.对象c--关联选中状态 -->
        <input type="checkbox" v-model="obj.c"/>
        <span>{{ obj.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
    };
  },
  // 计算属性
  computed: {
    isAll() {
      // 统计条件小选框 -》全选
      // every口诀：查找数组里,不符合条件，直接返回false
      return this.arr.every(obj=> obj.c === true)
    }
  }
};
</script>
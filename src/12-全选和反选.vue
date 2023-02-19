<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isAll" />
    <button @click="btn">反选</button>
    <ul>
      <li v-for="(obj, index) in arr" :key="index">
        <!-- 3.对象c--关联选中状态 -->
        <input type="checkbox" v-model="obj.c" />
        <span>{{ obj.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // 数据
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
  // 计算属性 可以有很多个，所以默认一个对象
  computed: {
    isAll: {
      set(val) {
        // 7. 全选框 - 选中状态(true/false) v-model是双向数据绑定
        this.arr.forEach((obj) => (obj.c = val));
      },
      //get 获取计算属性自己，set是根据计算属性设置自己
      get() {
        // 6. 统计小选框状态 ->  全选状态
        // every口诀: 查找数组里"不符合"条件, 直接原地返回false
        return this.arr.every((obj) => obj.c === true);
      },
    },
  },
  methods: {
    btn() {
      // 8.拿到数组中对象的C属性值，取反在赋予回去
      this.arr.forEach(obj => obj.c = !obj.c)
    }
  }
};
</script>
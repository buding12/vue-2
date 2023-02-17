<template>
  <div>
    <!-- 语法1：（值变量，索引变量名） in 目标结构
       口诀：想要谁循环就放到谁身上 -->
       <li v-for="(item,index) in arr" :key="index">
        {{ item  }}  ----- {{ index }}
       </li>
       <!-- 语法2：
       v-for='值变量名 in 目标结构' -->
       <li v-for="obj in stuArr" :key="obj.id">
         <span>{{ obj.name }}</span>
         <span>{{ obj.sex}}</span>
         <span>{{ obj.hobby}}</span>
       </li>
       <!--3. 语法：了解
          v-for='(value,key) in 对象' -->
          <p v-for="(value,key) in tObj" :key="value">
           <span> {{ value }}</span>
           <span>{{ key }}</span>
          </p>
          <!-- 4.语法
             v-for="变量名 in 固定数字" 
            从1开始遍历-->
            <div v-for="n in count" :key="n">{{ n }}</div>
  </div>
</template>

<script>
export default {
  name: 'VuecliDome2App',

  data() {
    return {
      arr: ['小明', '小红', '小蓝', '小紫'],
      stuArr: [
        {
          name: '孙悟空',
          sex: '男',
          hobby:'偷桃子'
        },
        {
          name: '猪八戒',
          sex: '女',
          hobby:'偷人参果'
        }
      ],
      tObj: {
        name: '小兰',
        age: 16,
        class:'2期'
      },
      count:10
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>
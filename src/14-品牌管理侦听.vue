<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="obj in list" :key="obj.id">
            <td>{{ obj.id }}</td>
            <td>{{ obj.name }}</td>
            <td :class="{ red: obj.price > 100 }">{{ obj.price }}</td>
            <td>{{ obj.time | fromatDate }}</td>
            <!-- 如果价格超过100，就有red这个类 -->
            <td style="width: 55px">
              <a href="#" @click="delFn(obj.id)">删除</a>
            </td>
          </tr>
          <tr v-show="list.length !== 0" style="background-color: #eee">
            <td>统计:</td>
            <td colspan="2">总价钱为: {{ allPrice }}</td>
            <td colspan="2">平均价: {{ svgPrice }}</td>
          </tr> 
        </tbody>

        <tfoot v-show="list.length === 0">
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
      </table>

      <!-- 添加资产 -->
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model.trim="name"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model.number="price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button @click.prevent="addFn" class="btn btn-primary">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import moment from "moment";
export default {
  data() {
    return {
      name: "", // 名称
      price: 0, // 价格
      list:JSON.parse(localStorage.getItem('pList')) || []
    };
  },
  methods: {
    // 添加
    addFn() {
      // 添加非空判断
      if (this.name === "") return alert("资产名不能为空");
      if (this.price === 0) return alert("价格不能为0");
      // 添加到list里面数据
      this.list.push({
        id:
          this.list.length === 0
            ? 100
            : this.list[this.list.length - 1].id * 1 + 1,
        name: this.name,
        price: this.price,
        time: new Date(),
      });
      // 清空表单
      this.name = "";
      this.price = 0;
      alert("恭喜你添加成功");
    },
    // 删除
    delFn(id) {
      // 通过id找到对应的下标
      let index = this.list.findIndex((obj) => obj.id === id);
      this.list.splice(index, 1);
    },
  },
  // 时间过滤器
  filters: {
    fromatDate(val) {
      return moment(val).format("YYYY-MM-DD");
    },
  },
  //计算属性
  computed: {
    allPrice() {
      // 3.求总价
      return this.list.reduce((sum, obj) => (sum += obj.price), 0);
    },
    svgPrice() {
      // 4.求均价
      return (this.allPrice / this.list.length).toFixed(2);
    },
  },
  // 深度侦听
  watch: {
    list: {
      handler() {
        // 2.存入本地
        localStorage.setItem('pList',JSON.stringify(this.list))
      },
      deep:true
    }
  }
};
</script>

<style >
.red {
  color: red;
}
</style>
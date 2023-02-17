import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 方式一：全局-过滤器
// 任意的.vue文件内直接使用
// 语法：vue.filter(‘过滤器名’，值 => 处理结果)
Vue.filter('reverse',val => val.split('').reverse().join(""))


new Vue({
  render: h => h(App),
}).$mount('#app')

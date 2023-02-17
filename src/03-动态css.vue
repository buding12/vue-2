<template>
  <div>
    <!-- 
      动态class：
          语法： 
             :class="{类名；布尔值}" -- {}中可以放置多个类名 
     -->
     <p :class="{red_str:bool}">动态class</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    bool:'ture'
  }
  },
}
</script>

<style scoped>
.red_str{
  color: blueviolet;
}
</style>>

